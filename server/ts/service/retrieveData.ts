import * as axios from 'axios'
import deserilize from './deserilize'
import * as _ from 'lodash'
const baseBath = 'https://www.ladbrokes.com.au/api/actions'

// interface Race {
//     race_num: number,
//     suspend: number,
//     status: string,
//     venue: string,

// }
// interface RaceResponse {
//     meetings:
// }
// interface Meeting {
//     name: 
// }

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
            return _.pick(competitor, ['name', 'saddle_number'])
        })
    })
}
export function getRaces() {
    const url = `${baseBath}/update?feeds[next5]`
    return axios.get(url).then((response: any) => {
        try {
            const meetings = deserilize(response, 0, 'meetings')
            return _.slice(_.sortBy(
                _.flatMap(meetings.map(getRacesFromMeeting)),
                ['expired']
            ), 0, 5)
        } catch (error) {
            throw error
        }
    })
}

function getRacesFromMeeting(meeting: any): any[] {
    const common = _.pick(meeting, ['name', 'type', 'date', 'country'])
    let events = _.toArray(meeting.events)
    return events.map((event: any) => {
        return _.assign({}, common, {
            eventId: event.id,
            raceNum: event.race_num,
            expired: new Date(event.suspend * 1000)
        })
    })
}