import React from 'react';
import { connect } from "react-redux";
import {setFirstName} from "./../stor/action";
import { actions } from "../stor/action";

function mapStateToProps(state) {
    return {
        user:state.userReducer.users
    }
}
function mapDispatchToProps(dispatch){
    return {
        setFirstName:(firstname)=>{dispatch(actions.add$ToUserName(firstname))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (function componentName(props) {

    const {user,setFirstName}=props
  return (
    <>
    <input value={user.firstName} onChange={(e)=>{setFirstName(e.target.value)}}></input><br/>
    <label>{user.lastName}</label><br/>
    <label>{user.firstName}</label><br/>
    </>
  );
})
