import * as types from './actionTypes'
import * as axios from 'axios'
import store from '../store'
const url = 'http://localhost:10010/api/races'
import * as _ from 'lodash'
import * as moment from 'moment'
const humanizeDuration = require('humanize-duration')

interface RaceActionTypes {
    type: string,
    payload: any
}

function displayHumanizeTime (dateString: string): string {
    var now = moment()
    var then = moment(dateString);
    var diffSeconds = now.diff(then, 'milliseconds');

    if (diffSeconds > 0) {
        return 'Closed'
    }

    return humanizeDuration(diffSeconds, {
        round: true
    })
}

export function clickRace(race: any) {
    return {
        type: types.CLICK_RACE,
        payload: race
    }
}

function getLatestExpiredTimeForRaces(races: any) {
    return races.map((race: any) => {
        return _.assign({}, race, {
            humanlizeExpiredTime: displayHumanizeTime(race.expired)
        })
    })
}

export function updateRaces(races: any) {
    return store.dispatch({
        type: types.GET_RACES_SUCCESS,
        payload: getLatestExpiredTimeForRaces(races)
    })
}

export function getNext5Races() {
    return axios.get(url).then((response: any) => {
        return store.dispatch({
            type: types.GET_RACES_SUCCESS,
            payload: getLatestExpiredTimeForRaces(response.data)
        })
    }, (error) => {
        return store.dispatch({
            type: types.GET_RACES_ERROR,
            payload: error
        })
    })
}
