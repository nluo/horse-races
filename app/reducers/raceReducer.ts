import * as types from '../actions/actionTypes'
import * as _ from 'lodash'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState: any = {
    races: [],
    visibleRace: {}
}

const raceReducer = function (state = initialState, action: any) {
    switch (action.type) {
        case types.GET_RACES_SUCCESS:
            // Return a new state that is immutable, so we could time travel
            return _.assign({}, state, { races: action.payload })
        case types.CLICK_RACE:
            return _.assign({}, state, {
                visibleRace: action.payload
            })
    }
    return state
} 

export { raceReducer }