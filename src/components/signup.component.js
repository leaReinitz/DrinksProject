// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81

import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { actions } from "../redux/stor/action";
// import firebase from '../firebase/firbase';
import firebase from "../firebase/firebase";




const mapDispatchToProps = (dispatch) => {
    return {
        saveUser: (user) => { debugger; dispatch(actions.saveUser(user)) }
    }
}
export default compose(
    withRouter, connect(null, mapDispatchToProps))(function SignUp(props) {

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const { history, saveUser } = props


        const handlerSubmit = (e) => {
            e.preventDefault();
            let newUser = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log(user)
                    axios.post("http://localhost:4000/register", newUser)
                        .then(respons => {
                            localStorage.setItem("token", respons.data.token)

                            saveUser(respons.data.user);
                            history.push("/drinks");

                        }).catch(err => {
                            console.log(err)
                            alert(`the rgister failed: ${err}`);
                        })
                })
                .catch((err) => {
                    console.log(err)
                    alert(`the rgister failed: ${err}`);
                });
        };

        debugger
        return (

            <form onSubmit={handlerSubmit} className="auth-inner" className="auth-inner">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={(e) => { setFirstName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={(e) => { setLastName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                {/* <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p> */}
            </form>
        );
    }
    )



