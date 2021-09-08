import React,{Component} from "react"
import Home from "./pages/home"
import SignupPage from "./pages/signup"
import SigninPage from "./pages/signin"
import * as ROUTES from "./constants/routes"

import {BrowserRouter as Router, Switch, Redirect} from "react-router-dom"
import {Route} from "react-router-dom"
import useAuthListener from "./hooks/user-auth-listener"

export default function(){
  const {currentUser} = useAuthListener()
  return (
          <Router>
              <Switch>
                <Route exact path={ROUTES.HOME} >
                    <Home currentUser={currentUser} />
                </Route>
                
                <Route path={ROUTES.SIGNIN} 
                  render={() => (currentUser ? <Redirect to={ROUTES.HOME}/> : <SigninPage/> )}
                />
      
                <Route path={ROUTES.SIGNUP} 
                  render={() => (currentUser ? <Redirect to={ROUTES.HOME}/> : <SignupPage/>)} />

              </Switch>
          </Router>
        );
}