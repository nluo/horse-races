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
