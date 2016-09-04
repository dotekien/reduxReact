/**
 * Created by kdo on 9/2/16.
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

let _ShowResults = ({results, userName}) => {
    if(!results || !userName) return (<div></div>)
    else
    return (
        <div>
            <h5>Search result for user name <b>{userName}</b>:</h5>
            {results.length!=0
            ?<ul>
                {results.map(user => <li>{user.name} - {user.age} </li>)}
            </ul>
            :<span>No results.</span>
            }
        </div>
    )
}

_ShowResults.propTypes = {
    userName: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    }).isRequired).isRequired
}

const mapStateToProps = (state) => {
    return {
        userName: state.findUserReducer.searchTerm,
        results: state.findUserReducer.results
    }
}

const ShowResults = connect(mapStateToProps)(_ShowResults)

export default ShowResults