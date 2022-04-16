import './App.css';
import { useState } from 'react';
import SignIn from './SignIn';

function App() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    console.log(user);
    event.preventDefault();
  };

  return (
    <SignIn onSubmit={handleSubmit} value={user} setValue={setUser}/>
  );
}

export default App;
