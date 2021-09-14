import React,{Component} from "react"
import { Home, Signin, Signup, Recovery } from "./pages/index"
import * as ROUTES from "./constants/routes"
import {GlobalStyles} from "./globalStyles"

import {BrowserRouter as Router, Switch, Redirect} from "react-router-dom"
import {Route} from "react-router-dom"
import useAuthListener from "./hooks/user-auth-listener"

export default function(){
  const {currentUser} = useAuthListener()
  return (
          <Router>
              <Switch>
                <Route exact path={ROUTES.HOME} >
                <GlobalStyles/>
                    <Home currentUser={currentUser}  />
                </Route>
                
                <Route path={ROUTES.SIGNIN} 
                  render={() => (currentUser ? <Redirect to={ROUTES.HOME}/> : <Signin/> )}
                />
    
                <Route path={ROUTES.SIGNUP} 
                  render={() => (currentUser ? <Redirect to={ROUTES.HOME}/> : <Signup/>)} />

              </Switch>
          </Router>
        );
}