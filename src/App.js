import './App.css';
import { useState } from 'react';
import SignIn from './SignIn';
import { AuthProvider, useFirebaseApp } from 'reactfire';
// Import auth directly because most components need it
// Other Firebase libraries can be lazy-loaded as-needed
import { getAuth } from 'firebase/auth';


function App() {

  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    console.log(user);
    event.preventDefault();
  };

  return (
  <AuthProvider sdk={auth}>
    <SignIn onSubmit={handleSubmit} value={user} setValue={setUser}/>
  </AuthProvider> 
  );
}

export default App;
