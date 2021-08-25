import Home from "./pages/home"
import SignupPage from "./pages/signup"
import * as ROUTES from "./constants/routes"
import {BrowserRouter as Router, Switch} from "react-router-dom"
//import useAuthListener from "./hooks/user-auth-listener"
import {Route} from "react-router-dom"
import SigninPage from "./pages/signin"

function App() {
  //const {user} = useAuthListener()

  return (
    <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} ><Home/></Route>
          <Route path={ROUTES.SIGNUP}><SignupPage/></Route>
          <Route path={ROUTES.SIGNIN}><SigninPage/></Route>
        </Switch>
    </Router>
  );
}

export default App;
