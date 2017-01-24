import * as axios from 'axios'
import deserilize from './deserilize'
import * as _ from 'lodash'
const renameKeys = require('object-rename-keys')
const baseBath = 'https://www.ladbrokes.com.au/api/actions'

export async function getRacesWithCompetitors() {
    try {
        const races = await getRaces()
        return Promise.all(races.map(async (race) => {
            let competitors = await getCompetitorsFromRace(race)
            return _.assign({}, race, {
                competitors: competitors
            })
        }))
    } catch (error) {
        throw error
    }
}

export function getCompetitorsFromRace(race: any) {
    const url = `${baseBath}/update?feeds[competitors][event_id]=${race.eventId}`

    return axios.get(url).then((respone: any) => {
        const competitors = deserilize(respone, 0, 'competitors')

        return competitors.map((competitor) => {
            const changeKeys = {
                saddle_number: 'saddleNumber',
                jockey_name: 'jockeyName'
            }
            return renameKeys(_.pick(competitor, ['name', 'saddle_number', 'jockey_name']), changeKeys)
        })
    })
}

export function getRaces() {
    const url = `${baseBath}/update?feeds[next5]`
    return axios.get(url).then((response: any) => {
        const meetings = deserilize(response, 0, 'meetings')
        // Return 5 races that is sorted by expired time 
        return _.slice(_.sortBy(
            _.flatMap(meetings.map(getRacesFromMeeting)),
            ['expired']
        ), 0, 5)
    })
}

function getRacesFromMeeting(meeting: any): any[] {
    const changeKeys = {
        name: 'venue'
    }

    const common = renameKeys(_.pick(meeting, ['name', 'type', 'date', 'country']), changeKeys)

    let events = _.toArray(meeting.events)
    return events.map((event: any) => {
        return _.assign({}, common, {
            eventId: event.id,
            raceNum: event.race_num,
            expired: new Date(event.suspend * 1000),
            description: event.description,
            status: event.status
        })
    })
}