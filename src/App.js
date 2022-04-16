import './App.css';
import Auth from './Auth';
import { AuthProvider, useFirebaseApp } from 'reactfire';
// Import auth directly because most components need it
// Other Firebase libraries can be lazy-loaded as-needed
import { getAuth } from 'firebase/auth';


function App() {

  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);

  return (
  <AuthProvider sdk={auth}>
    <Auth />
  </AuthProvider> 
  );
}

export default App;
