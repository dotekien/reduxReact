/**
 * Created by kdo on 9/2/16.
 */

import React from 'react'
import { connect } from 'react-redux'
import { findUser } from '../actions/user-actions'
import ShowResults from './ShowResults'

let FindUser = ({ dispatch}) => {
    let searchTerm
    return (
        <div>
            <form onSubmit = { e => {
            e.preventDefault()
            if (!searchTerm.value.trim()) {
              return
            }

            dispatch(findUser(searchTerm.value));
            searchTerm.value = ''

            }}>
                <label>User Search:</label>
                <input className={"user"} type="text" pattern="[a-zA-Z]*" ref={node => {
                        searchTerm = node}} />
                <div className={"marginTop"}>
                <button type="submit" className={"user"}>
                    Find User
                </button>
                </div>
            </form>
            <ShowResults/>
        </div>
    )
}

FindUser = connect()(FindUser)

export default FindUser
