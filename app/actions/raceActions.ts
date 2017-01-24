import * as types from './actionTypes'
import * as axios from 'axios'
import store from '../store'
const url = 'http://localhost:10010/api/races'

interface RaceActionTypes {
    type: string,
    payload: any
}

export function getNext5Races() {
    return axios.get(url).then((response: any) => {
        return store.dispatch({
            type: types.GET_RACES_SUCCESS,
            payload: response.data
        })
    }, (error) => {
        return store.dispatch({
            type: types.GET_RACES_ERROR,
            payload: error
        })
    })
}
