import React from 'react';
import { connect } from "react-redux";


function mapStateToProps(state) {
    return{
        firstName:state.userReducer.user.firstName,
        lastName:state.userReducer.user.lastName,
    }
}
export default connect(mapStateToProps,null)( function Hello(props) {
  
    const {firstName, lastName}=props
  return (
    <>
    <span className="profit">hello {firstName} {lastName}</span>
    </>
  );
})
