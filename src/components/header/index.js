import React from "react"

import { Typography, Toolbar, Button, Link } from "@material-ui/core"
import { useStyles } from "./styles/header";


export default function Header({children, ...restProps}){
    const classes = useStyles();
    return <Toolbar {...restProps} className={classes.toolbar}>{children}</Toolbar>
}

Header.ToolBarDown = function HeaderToolBarDown({sections}){
    const classes = useStyles()
    return (
        <Toolbar>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
        </Toolbar>
    )
}

Header.Button = function HeaderButton({children, ...restProps}){
    const classes = useStyles()
    return <Button {...restProps} className={classes.toolbarBtn}>{children}</Button>
}

Header.Typography = function HeaderTypography({children, ...restProps}){
    const classes = useStyles();
    return <Typography {...restProps} className={classes.toolbarTitle}>{children}</Typography>
}

