/**
 * Created by kdo on 9/2/16.
 */

import * as types from '../actions/action-types';


const initialState = {
    user: {},
    success: false,
    isSaving: false,
};

export const saveUserReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_USERS_FAILURE:
            return Object.assign({}, state, {
                success: action.failure, isSaving: false
            })
        case types.ADD_USERS_REQUEST:
            return Object.assign({}, state, {success: false, isSaving: true
            })
        case types.ADD_USERS_RECEIVE:
            return Object.assign({}, state, {
                user: action.user,
                success: action.success,
                isSaving: false
            })
        default:
            return state;
    }
}

const initialSearchState = {
    searchTerm: '',
    results: [],
    success: false,
    isFinding: false
};

export const findUserReducer = (state=initialSearchState, action) => {
    switch (action.type) {
        case types.FIND_USERS_FAILURE:
            return Object.assign({}, state, { success: action.failure,
                isFinding: false})
        case types.FIND_USERS_REQUEST:
            return Object.assign({}, state, {
                searchTerm: action.searchTerm,
                success: false,
                isFinding: true
            })
        case types.FIND_USERS_RECEIVE:
            return Object.assign({}, state, {
                results: action.users,
                success: true,
                isFinding: false
            })
        default:
            return state;
    }
}