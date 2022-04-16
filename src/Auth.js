import { useState } from 'react';
import SignIn from './SignIn';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth, useSigninCheck } from 'reactfire';


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
            console.log(`${data.user.displayName} has signed in.`);
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
        return <button onClick={() => signOut(auth)}>sign out</button>;
      } else {
        return <SignIn onSubmit={handleSubmit} value={user} setValue={setUser}/> ;
      }
}
 
export default Auth;