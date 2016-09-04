/**
 * Created by kdo on 9/2/16.
 */

import React from 'react'
import { connect } from 'react-redux'
import { findUser } from '../actions/user-actions'
import ShowResults from './ShowResults'

let FindUser = ({ dispatch,loading}) => {
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
                <input className={"user"} type="text" pattern="[a-zA-Z]*" placeholder="User name" ref={node => {
                        searchTerm = node}} />
                <div className={"marginTop"}>
                <button type="submit" className={"user"}>
                    Find User
                </button>
                    {loading==true
                        ?<span>.....................finding</span>
                        :<span></span>
                    }
                </div>
            </form>
            <ShowResults/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.findUserReducer.isFinding
    }
}

FindUser = connect(mapStateToProps)(FindUser)

export default FindUser
