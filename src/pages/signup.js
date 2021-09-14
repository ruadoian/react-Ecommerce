import { useState, useEffect } from 'react';
import {useInput} from "../hooks/input-hooks"

import { auth, handleUserProfile } from '../firebase/utils';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {FormControlLabel, Checkbox, Link} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import {Form} from "../components"
import * as ROUTES from "../constants/routes"
import { Redirect } from 'react-router';

export default function Signup(){

    const {value:firstName, bind:bindFirstName, reset:resetFirstName} = useInput()
    const {value:lastName, bind:bindLastName, reset:resetLastName} = useInput()
    const {value:email, bind:bindEmail, reset:resetEmail} = useInput()
    const {value:password, bind:bindPassword, reset:resetPassword} = useInput()
    const {value:confirmPassword, bind:bindConfirmPassword, reset:resetConfirmPassword} = useInput()

    const [error, setError] = useState([])

   const handleSubmit = async e =>{
        e.preventDefault();

         if(password !== confirmPassword){
            const error = ["Password and Confirm Password did not matched."]
            setError(error)
        }

        try{
            const additionalFields = {firstName, lastName}
            const {user} = auth.createUserWithEmailAndPassword(email, password)
            
            await handleUserProfile(user, additionalFields)
            Redirect(ROUTES.HOME)
        }catch(err){
            console.log(err)
        }
   }

   
   const displayError = error.length > 0 ? <Alert severity="error">{error}</Alert> : null;
    return(
       <Form.Container component="main" maxwidth="xs">
           <Form.Wrapper>
               <Form.Avatar>
                   <LockOutlinedIcon/>
               </Form.Avatar>
                {displayError}
               <Form.Typography component="h1" varient="h5">
                    Signup
               </Form.Typography>

               <Form.Base noValidate onSubmit={handleSubmit}>
                    <Form.Item container spacing={2}>
                        <Form.Item item xs={12} sm={6}>
                            <Form.TextField
                                {...bindFirstName}
                                 name="firstName"
                                 autoComplete="fname"
                                 variant="outlined"
                                 required
                                 fullWidth
                                 id="firstName"
                                 label="First Name"
                                 autoFocus
                            />
                        </Form.Item>

                        <Form.Item item xs={12} sm={6}>
                            <Form.TextField
                                {...bindLastName}
                                autoComplete="lname"
                                name="lastName"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                autoFocus
                            />
                        </Form.Item>


                        <Form.Item item xs={12}>
                            <Form.TextField
                                {...bindEmail}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Form.Item>

                        <Form.Item item xs={12}>
                            <Form.TextField
                                {...bindPassword}
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                name="password"
                            />
                        </Form.Item>
                        
                        <Form.Item item xs={12}>
                            <Form.TextField
                                {...bindConfirmPassword}
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                            />
                        </Form.Item>
                        

                        <Form.Item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        ></FormControlLabel>
                        </Form.Item>
                    </Form.Item>

                    <Form.Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            >Signup
                    </Form.Button>

                    <Form.Item container justifyContent="flex-end">
                            <Form.Item>
                                <Link to={ROUTES.SIGNIN} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Form.Item>
                    </Form.Item>
               </Form.Base>
               
           </Form.Wrapper>
       </Form.Container> 
    )
}