import {Grid, Avatar, TextField, Typography, Button, Container} from "@material-ui/core"
import {Wrapper, Base} from "./styles/form"
import {useStyles} from "./styles/form"

export default function Form({children, ...restProps}){
    const classes = useStyles()
    return <Grid {...restProps} className={classes.root}>{children}</Grid>
}

Form.Item = function FormItem({children, ...restProps}){
    return <Grid {...restProps}>{children}</Grid>
}

Form.Wrapper = function FormWrapper({children, ...restProps}){
    const classes = useStyles()
    return <Wrapper {...restProps} className={classes.paper}>{children}</Wrapper>
}

Form.Avatar = function FormAvatar({children, ...restProps}){
    return <Avatar {...restProps}>{children}</Avatar>
}

Form.Image = function FormImage({ ...restProps}){
    const classes = useStyles()
    return <Grid {...restProps} className={classes.image} />
}

Form.Typography = function FormTypography({children, ...restProps}){
    return <Typography {...restProps}>{children}</Typography>
}

Form.Base = function FormBase({children, ...restProps}){
    const classes = useStyles()
    return <Base {...restProps} className={classes.form}>{children}</Base>
}

Form.TextField = function FormTextField({children, ...restProps}){
    return <TextField {...restProps}>{children}</TextField>
}

Form.ControlLabel = function FormControlLabel({children, ...restProps}){
    return <FormControlLabel {...restProps}>{children}</FormControlLabel>
}

Form.Button = function FormButton({children, ...restProps}){
    const classes = useStyles()
    return <Button {...restProps} className={classes.submit}>{children}</Button>
}

Form.Container = function FormContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}