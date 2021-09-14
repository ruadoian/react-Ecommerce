import {Form } from "../components/"
import {Paper, FormControlLabel, Checkbox, Link} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {signInWithGoogle, auth} from "../firebase/utils"
import {useInput} from "../hooks/input-hooks"
import * as ROUTES from "../constants/routes"

export default function Signin(){
    
    const {value:email, bind:bindEmail, reset:resetEmail} = useInput()
    const {value:password, bind:bindPassword, reset:resetPassword} = useInput()

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await auth.signInWithEmailAndPassword(email, password)
            resetEmail()
            resetPassword()
        }catch(err){
            //console.log(err)
        }
    }
    
    return(
        <Form container component="main" >
            <Form.Image item xs={false} sm={4} md={7} />

                <Form.Item item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Form.Wrapper>
                            <Form.Avatar>
                                <LockOutlinedIcon/>
                            </Form.Avatar>
                            <Form.Typography component="h1" variant="h5">
                                Sign In
                            </Form.Typography>

                            <Form.Base noValidate onSubmit={handleSubmit}>
                                    
                                <Form.TextField 
                                    {...bindEmail}
                                     variant="outlined"
                                     margin="normal"
                                     required
                                     fullWidth
                                     id="email"
                                     label="Email Address"
                                     name="email"
                                     autoComplete="email"
                                     autoFocus
                                />

                                <Form.TextField 
                                    {...bindPassword}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />

                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />

                                <Form.Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={() => signInWithGoogle()}
                                    >
                                    Sign In With Google
                                </Form.Button>

                                <Form.Button 
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    >
                                    Sign In
                                </Form.Button>

                                <Form.Item container>
                                    <Form.Item item xs>
                                        <Link href={ROUTES.RECOVERY} variant="body2">
                                        Forgot password?
                                        </Link>
                                    </Form.Item>
                                </Form.Item>

                            </Form.Base>
                        
                    </Form.Wrapper>
                </Form.Item>
        </Form>
    )
}