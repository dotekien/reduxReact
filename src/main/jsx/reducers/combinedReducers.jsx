import {
    combineReducers
} from 'redux'

import {saveUserReducer, findUserReducer} from './userReducer'

const combinedReducers = combineReducers({
    saveUserReducer,
    findUserReducer
})

export default combinedReducers
