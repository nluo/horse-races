import * as axios from 'axios'
import deserilize from './deserilize'
import * as _ from 'lodash'
const renameKeys = require('object-rename-keys')
const baseBath = 'https://www.ladbrokes.com.au/api/actions'

const redis = require('redis')
const client = redis.createClient()


export async function getNextRacesWithCompetitors(numberOfRaces: number) {

    const races = await getRaces(numberOfRaces)

    const raceKeys = await getRaceKeysFromCache()

    const racesFromCache = await Promise.all(raceKeys.map(getRaceFromCache))

    // console.log('Redis races is ', racesFromCache)
    
    if (racesFromCache.length >  0) {
        console.log('races from cached!')
        return racesFromCache
    }
    const racesWithCompetitors = await Promise.all(races.map(async (race: Race) => {
        let competitors = await getCompetitorsFromRace(race)
        return _.assign({}, race, {
            competitors: competitors
        })
    }))
    await Promise.all(racesWithCompetitors.map((race: Race) => {
        return setRaceIntoCache(race)
    }))

    return racesWithCompetitors
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

function getRaceKeysFromCache(): Promise<[string]> {
    return new Promise((resolve, reject) => {
        client.keys('race:*', function (error, replies) {
            console.log('error is ', error, ' replies is ', replies)
            if (error) {
                return reject(error)
            }
            return resolve(replies)
        })
    })
}

function getRaceFromCache (key: string) {
    return new Promise((resolve, reject) => {
        client.get(key, (error, response) => {
            if (error) {
                return reject(error)
            }
            console.log('the response from get is ', response)
            return resolve(JSON.parse(response))
        })
    })
}

function setRaceIntoCache(race: Race) {
    return new Promise((resolve, reject) => {
        client.set(`race:${race.eventId}`, JSON.stringify(race), (error, results) => {
            if (error) {
                return reject(error)
            }
            return resolve(results)
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