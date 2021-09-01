import {Form } from "../components/"
import {Paper, FormControlLabel, Checkbox, Link} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {signInWithGoogle} from "../firebase/utils"


export default function SigninPage(){
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("HEllo there!")
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
                                        <Link href="#" variant="body2">
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