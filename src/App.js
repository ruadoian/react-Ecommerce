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
                
                <Route path={ROUTES.SIGNIN}>
                  {currentUser ? <Redirect to="/" /> : <SigninPage/>} 
                </Route>    
      
                <Route path={ROUTES.SIGNUP}><SignupPage/></Route>
              </Switch>
          </Router>
        );
}

// const initialState = {
//   currentUser:null
// }

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {...initialState}
//   }

//   authListener = null;

//   componentDidMount(){
//     this.authListener = auth.onAuthStateChanged(userAuth => {
//       if(!userAuth) return;

//       this.setState({
//         currentUser:userAuth
//       })
//     })
//   }

//   componentWillUnmount(){
//     this.authListener();
//   }

//   render(){
//     const {currentUser} = this.state
//     return (
//       <Router>
//           <Switch>
//             <Route exact path={ROUTES.HOME} ><Home currentUser={currentUser} /></Route>
            
//             <Route path={ROUTES.SIGNIN}>
//               {currentUser ? <Redirect to="/" /> : <SigninPage currentUser={currentUser}/>} 
//             </Route>    
  
//             <Route path={ROUTES.SIGNUP}><SignupPage/></Route>
//           </Switch>
//       </Router>
//     );
//   }
// }

// export default App;
