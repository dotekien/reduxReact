/**
 * Created by kdo on 9/2/16.
 */

import * as types from '../actions/action-types';

export const addUserRequest = (user) => {
    return {
        type: types.ADD_USERS_REQUEST,
        savedUser: user
    }
}

export const addUserReceive = (result) => {
    return {
        type: types.ADD_USERS_RECEIVE,
        success: result.value?result.value:result.status
    }
}

export const addUserFailure = (error) => {
    return {
        type: types.ADD_USERS_FAILURE,
        failure: error
    }
}
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
export const addUser = (user) => {
    return dispatch => {
        dispatch(addUserRequest(user))
        return fetch('http://localhost:8080/person/save',{
            method: 'post',
            headers: myHeaders,
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(json => dispatch(addUserReceive(json)))
            .catch(error => dispatch(addUserFailure(error)))
    }
}

export const findUserRequest = (userName) => {
    return {
        type: types.FIND_USERS_REQUEST,
        searchTerm: userName
    }
}

export const findUserReceive = (result) => {
    return {
        type: types.FIND_USERS_RECEIVE,
        users: result
    }
}

export const findUserFailure = (error) => {
    return {
        type: types.FIND_USERS_FAILURE,
        failure: error
    }
}

export const findUser = (userName) => {
    return dispatch => {
        dispatch(findUserRequest(userName))
        return fetch('http://localhost:8080/person/find/'+userName)
            .then(response => response.json())
            .then(json => dispatch(findUserReceive(json)))
            .catch(error => dispatch(findUserFailure(error)))
    }
}