import * as types from '../actions/actionTypes'
import * as _ from 'lodash'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState: RaceState = {
    races: [],
    visibleRace: {},
    isFetching: false
}

const raceReducer = function (state = initialState, action: any) {
    switch (action.type) {
        case types.GET_RACES_SUCCESS:
            // Return a new state that is immutable, so we could time travel
            return _.assign({}, state, { races: action.payload, isFetching: false })
        case types.UPDATE_RACES_TIMER: 
            return _.assign({}, state, {
                races: action.payload
            })
        case types.CLICK_RACE:
            return _.assign({}, state, {
                visibleRace: action.payload
            })
        case types.REQUEST_RACES:
            return _.assign({}, state, {
                isFetching: true
            })
    }
    return state
} 

export { raceReducer }