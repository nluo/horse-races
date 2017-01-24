import * as types from '../actions/actionTypes'
import * as _ from 'lodash'

const initialState: any = {
    races: []
}

const raceReducer = function (state = initialState, action: any) {
    switch (action.type) {
        case types.GET_RACES_SUCCESS:
            // Return a new state that is immutable, so we could time travel
            return _.assign({}, state, { races: action.payload })
    }
    return state
} 

export { raceReducer }