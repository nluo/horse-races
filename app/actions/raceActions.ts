import * as types from './actionTypes'
import * as axios from 'axios'
import store from '../store'
const url = 'http://localhost:10010/api/races'

import { displayHumanizeTime, getLatestExpiredTimeForRaces } from '../helpers/raceTimeHelper'

export function clickRace(race: any) {
    return {
        type: types.CLICK_RACE,
        payload: race
    }
}

export function updateRaces(races: Race[]) {
    return {
        type: types.UPDATE_RACES_TIMER,
        payload: getLatestExpiredTimeForRaces(races)
    }
}

export function getNext5Races() {
    store.dispatch({
        type: types.REQUEST_RACES
    })
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
