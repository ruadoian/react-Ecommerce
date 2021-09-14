import {useState} from "react"
import {Form} from "../components"
import {Grid, Paper, CssBaseline} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import {auth} from "../firebase/utils"
import {useInput} from "../hooks/input-hooks"
import {withRouter} from "react-router-dom"
import * as ROUTES from "../constants/routes"

function Recovery(props){

    const {value:emailRecovery, bind:bindEmailRecovery,reset:resetEmailRecovery } = useInput()
    const [errorMsg, setErrorMsg] = useState([])


    const handleSubmit = async event =>{
        event.preventDefault();

        try{
            const config = {url:"http://localhost:3000/signin"}
            await auth.sendPasswordResetEmail(emailRecovery, config)
            .then(() =>{
                props.history.push(ROUTES.SIGNIN)
            })
            .catch((error) =>{
                setErrorMsg(error.message)
            })
        }catch(error){
            console.log(error)
        }
    }

    console.log(errorMsg)
    const displayError = errorMsg.length > 0 ? <Alert severity="error">{errorMsg}</Alert>:null;
    
    return(
        <Form container component="main">
             <CssBaseline />
             <Form.Image item xs={false} sm={4} md={7} />
             
             <Grid  item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Form.Wrapper>
                    <Form.Avatar>
                        <BuildOutlinedIcon />
                    </Form.Avatar>

                    <Form.Typography component="h1" variant="h5">
                        Recover Password
                    </Form.Typography>
                    {displayError}
                    <Form.Base onSubmit={handleSubmit}>
                        <Form.TextField  
                            {...bindEmailRecovery}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Recovery"
                            name="emailRecovery"
                            autoComplete="email"
                            autoFocus/>
                          
                          <Form.Button
                             type="submit"
                             fullWidth
                             variant="contained"
                             color="primary"
                          > Recover Password </Form.Button>

                    </Form.Base>
                    </Form.Wrapper>
                 </Grid>
   
        </Form>
    )
}

// export default Recovery
export default withRouter(Recovery)