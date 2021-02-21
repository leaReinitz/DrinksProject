import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { actions } from "../redux/stor/action";
import firebase from '../firebase/firebase';


const mapDispatchToProps = (dispatch) => {
    return {
        saveUser: (user) => { dispatch(actions.saveUser(user)) }
    }
}


export default compose(
    withRouter, connect(null, mapDispatchToProps))(function Login(props) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const { history, saveUser } = props

        useEffect(() => {
            if (email === "" && password === "") {
                firebase.auth().signOut();
                localStorage.clear()
                saveUser({})
            }
        })

        const handlerSubmit = (e) => {
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log(user)
                    axios.get(`http://localhost:4000/login/${email}/${password}`)
                        .then(respons => {
                            const myUser = respons.data.user;
                            debugger
                            console.log(myUser)
                            localStorage.setItem("token", respons.data.token)
                            saveUser(myUser);
                            history.push("/drinks");
                        }).catch(err => {
                            debugger
                            firebase.auth().signOut();
                            localStorage.clear()
                            saveUser({})
                            history.push('/sign-in')
                            alert("login failed")
                        })
                })
                .catch((err) => {
                    debugger
                    firebase.auth().signOut();
                    localStorage.clear()
                    saveUser({})
                    history.push('/sign-in')
                    alert("login failed")
                });
        };

        return (
            <form id="loginForm" onSubmit={handlerSubmit} className="auth-inner">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </form>
        );
    }
    )