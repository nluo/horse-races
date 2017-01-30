import * as axios from 'axios'
import deserilize from './deserilize'
import * as _ from 'lodash'
const renameKeys = require('object-rename-keys')
const baseBath = 'https://www.ladbrokes.com.au/api/actions'

export async function getNextRacesWithCompetitors(numberOfRaces: number) {

    const races = await getRaces(numberOfRaces)
    return Promise.all(races.map(async (race: Race) => {
        let competitors = await getCompetitorsFromRace(race)
        return _.assign({}, race, {
            competitors: competitors
        })
    }))
}


function getCompetitorsFromRace(race: Race) {
    const url = `${baseBath}/update?feeds[competitors][event_id]=${race.eventId}`

    return axios.get(url).then((response: any) => {
        const competitors = deserilize(response, 0, 'competitors')

        return competitors.map((competitor) => {
            const changeKeys = {
                saddle_number: 'saddleNumber',
                jockey_name: 'jockeyName'
            }
            return renameKeys(_.pick(competitor, ['name', 'saddle_number', 'jockey_name']), changeKeys)
        })
    })
}

function getRaces(numberOfRaces: number) {
    const url = `${baseBath}/update?feeds[next5]`
    return axios.get(url).then((response: any) => {
        const meetings = deserilize(response, 0, 'meetings')
        // Return 5 races that is sorted by expired time 
        return _.slice(_.sortBy(
            _.flatMap(meetings.map(getRacesFromMeeting)),
            ['expired']
        ), 0, numberOfRaces)
    })
}

function getRacesFromMeeting(meeting: Meeting): Race[] {
    const changeKeys = {
        name: 'venue'
    }
    // Cherry pick object properties and rename object key 'name' to 'venue'
    const common = renameKeys(_.pick(meeting, ['name', 'type', 'date', 'country']), changeKeys)

    return _.toArray(meeting.events).map((event: Event) => {
        return _.assign({}, common, {
            eventId: event.id,
            raceNum: event.race_num,
            expired: new Date(event.outcome * 1000),
            description: event.description,
            status: event.status
        })
    })
}