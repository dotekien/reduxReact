/**
 * Created by kdo on 9/2/16.
 */

import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/user-actions'

let AddUser = ({ dispatch,loading,success }) => {
    let name, age
    
    return (
        <div>
            <form onSubmit = { e => {
            e.preventDefault()
            if (!name.value.trim()) {
              return
            }
            if (!age.value.trim()) {
              return
            }
            let user = {name:name.value, age: age.value}
            dispatch(addUser(user));
            name.value = ''
            age.value = ''
            }}>
                <label>Name:</label>
                <input className={"user"} type="text" pattern="[a-zA-Z]*" ref={node => {
                        name = node}} />
                <label>Age:</label>
                <input className={"user"} type="number" min="0" max="150" ref={node => {
                        age = node}} />
                <div className={"marginTop"}>
                <button type="submit" className={"user"}>
                    Add User
                </button>
                    {loading==true
                        ?<span>...saving</span>
                        :success==true?<span><i>Saved.</i></span>:<span></span>
                    }
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.saveUserReducer.isSaving,
        success: state.saveUserReducer.success
    }
}
AddUser = connect(mapStateToProps)(AddUser)

export default AddUser