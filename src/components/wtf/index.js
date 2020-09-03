import React from 'react'
import { store } from '../../_helpers';
import {userActions} from '../../_actions'
import { connect } from 'react-redux';
function Wtf({userName}){
    return (
     <div className="container-custom">
        <h2>{userName?userName:"Welcome"}</h2>
        {/* <button className="joker-button" onClick={()=>store.dispatch(userName ?  userActions.userName(""):userActions.userName("Joker"))}>click</button> */}
    </div>
    )
}

function mapStateToProps(state){
    const user = state.users
    return user
}

export default connect (mapStateToProps)(Wtf)