import React from "react"
import * as ROUTES from "../constants/routes"

import {Header} from "../components/"
import {Link as ReactLink} from "react-router-dom"

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export function HeaderContainer({children}){
    return(
        <>
        <Header>
        <Header.Button size="small">Subscribe</Header.Button>
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

        <Header.Button variant="outlined" size="small" component={ReactLink} to={ROUTES.SIGNUP}>
          Signup
        </Header.Button>

        <Header.Button variant="outlined" size="small" component={ReactLink} to={ROUTES.SIGNIN}>
          Signin
        </Header.Button>

      </Header>
        </>

    )
}
