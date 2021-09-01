import React from "react"
import * as ROUTES from "../constants/routes"
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import {Header} from "../components/"
import {Link as ReactLink, Redirect} from "react-router-dom"
import {auth} from "../firebase/utils"

export function HeaderContainer({sections, currentUser}){
  
  const currentStat = currentUser ? currentUser.displayName:"Subscribe"

  return(
        <>
        <Header>
        <Header.Button size="small">{currentStat}</Header.Button>
        <Header.Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >

        </Header.Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>

        {currentUser &&
                <Header.Button variant="outlined" size="small" onClick={() => auth.signOut()}>Logout</Header.Button>
        }
         
         {!currentUser &&       
                <>
                <Header.Button variant="outlined" size="small" component={ReactLink} to={ROUTES.SIGNUP}>
                  Signup
                </Header.Button>
                <Header.Button variant="outlined" size="small" component={ReactLink} to={ROUTES.SIGNIN}>
                 Signin
                </Header.Button>
                </>
        }

      </Header>
      <Header.ToolBarDown component="nav" variant="dense" sections={sections} />
        </>

    )
}
