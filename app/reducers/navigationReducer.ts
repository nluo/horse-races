import * as types from '../actions/actionTypes'
import * as _ from 'lodash'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState: any = {
    shouldDisplayBackButton: false
}

const navigationReducer = function (state = initialState, action: any) {
    switch (action.type) {
        case LOCATION_CHANGE:
            if (action.payload.action === 'PUSH') {
                return _.assign({}, state, {
                    shouldDisplayBackButton: true
                })
            } else {
                return _.assign({}, state, {
                    shouldDisplayBackButton: false
                })
            }
    }
    return state
} 

export { navigationReducer }