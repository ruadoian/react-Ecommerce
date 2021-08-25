import React from "react"


import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useStyles } from "./styles/header";


export default function Header({children, ...restProps}){
    const classes = useStyles();
    return <Toolbar {...restProps} className={classes.toolbar}>{children}</Toolbar>
}

Header.Button = function HeaderButton({children, ...restProps}){
    
    return <Button {...restProps}>{children}</Button>
}

Header.Typography = function HeaderTypography({children, ...restProps}){
    const classes = useStyles();
    return <Typography {...restProps} className={classes.toolbarTitle}>{children}</Typography>
}

