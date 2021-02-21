import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from "./redux/stor/stor";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Hello from "./components/Hello";
import Drinks from "./components/Drinks";
import UserSearches from "./components/UserSearches";
import LogOut from './components/LogOut';
import firebase from "../src/firebase/firebase";


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((_authenticated) => {
      setAuthenticated(_authenticated?true:false)

    });
  }, [])


  return (
    <Provider store={store}>
      <Router>
        <div className="App">

          <nav className="navbar navbar-expand-lg navbar-light fixed-top " style={{ marginBottom: "0px" }}>
            <div className="container">
              {/* <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link> */}
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

              
                {authenticated ? <>
                 
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/userSearches"}>my searches</Link>
                    </li>
                  </ul>
                </> : <>
                    <ul className="navbar-nav ">

                      <li className="nav-item">
                        <Link className="nav-link" authenticated={authenticated} to={"/sign-in"}>Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" authenticated={authenticated} to={"/sign-up"}>Sign up</Link>
                      </li>
                    </ul>
                   
                  </>}
                  


                {/* <ul className="navbar-nav ml-auto">

                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/userSearches"}>my searches</Link>
                  </li>
                </ul> */}

              </div>
              <Hello></Hello>
                  <LogOut></LogOut>
            </div>

          </nav>

          <div className="auth-wrapper">
            <div >
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/userSearches" component={UserSearches} />
                <Route path="/drinks" render={(props) => (authenticated ? <Drinks {...props} /> : <Redirect to="/sign-in" />)} />
              </Switch>
            </div>
          </div>
        </div>

      </Router>

    </Provider>
  );
}

export default App;
