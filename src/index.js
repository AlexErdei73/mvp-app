import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyDMhOFj__TM9qd18HG-JL4JOJWC4gtfCQY",
  authDomain: "mvp-app-b233e.firebaseapp.com",
  projectId: "mvp-app-b233e",
  storageBucket: "mvp-app-b233e.appspot.com",
  messagingSenderId: "784383986018",
  appId: "1:784383986018:web:bf188429b9a24884ce843b"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
