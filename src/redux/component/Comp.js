import React from 'react';
import {connect} from 'react-redux'
// import {setLastName} from './../stor/action'
import { actions } from "../stor/action";

function mapStateToProps(state) {
   return{
       user:state.userReducer.users
   } 
}
function mapDispatchToProps(dispatch){
    return {
        setLastName:(lastName)=>{dispatch( actions.add$ToUserName(lastName))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)( function Comp2(props) {
    const {user,setLastName}=props
  return (
    <>
    <input value={user.lastName}
    onChange={(e)=>{setLastName(e.target.value)}}
    ></input><br/>
    <label>{user.firstName}</label><br/>
    <label>{user.lastName}</label><br/>

    </>
  );
})


