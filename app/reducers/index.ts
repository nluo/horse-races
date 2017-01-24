import { combineReducers } from 'redux'
import { raceReducer } from './raceReducer'

const reducers = combineReducers({
    raceState: raceReducer
})
export default reducers