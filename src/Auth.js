import { useState } from 'react';
import SignIn from './SignIn';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth, useSigninCheck } from 'reactfire';
import { Button, Grid, Box } from '@material-ui/core';
import Database from './Database';


const Auth = () => {

    const signOut = (auth) => auth.signOut().then(() => {
        console.log('User has signed out.');
    });

    const signIn = (auth, user) => {
       return signInWithEmailAndPassword(auth, user.email, user.password);
    }

    const auth = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: ""
      });
    
    const handleSubmit = (event) => {
        console.log(user);
        event.preventDefault();
        signIn(auth, user)
        .then((data) => {
            console.log(`User has signed in.`);
        })
        .catch((error) => {
            console.error(error.message, error.code);
        });
      };
    
    const { status, data: signinResult } = useSigninCheck();

    if (status === 'loading') {
        return <div>...loading</div>;
    }
    
    const signedIn = signinResult.signedIn;
    
      if (signedIn === true) {
        return (
        <>
          <Box m={8}>
            <Database />
            <Grid container justifyContent="center">
              <Box m={4}>
                <Button variant="contained" color="primary" onClick={() => signOut(auth)}>sign out</Button>
              </Box>
            </Grid>
          </Box>
        </>
        );
      } else {
        return <SignIn onSubmit={handleSubmit} value={user} setValue={setUser}/> ;
      }
}
 
export default Auth;