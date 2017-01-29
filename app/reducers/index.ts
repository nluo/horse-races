import { combineReducers } from 'redux'
import { raceReducer } from './raceReducer'
import { routerReducer } from 'react-router-redux'
import { navigationReducer } from './navigationReducer'

const reducers = combineReducers({
    raceState: raceReducer,
    routing: routerReducer,
    navigation: navigationReducer
})

export default reducers