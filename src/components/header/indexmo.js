import React from "react"
import { useStyles } from "./styles/header"

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Header({children, ...restProps}){
    return <Toolbar {...restProps}>{children}</Toolbar>
}

Header.Button = function HeaderButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

Header.Typography = function HeaderTypography({children, ...restProps}){
    return <Typography {...restProps}>{children}</Typography>
}

