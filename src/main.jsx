import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxYKz6DDS4HVy0rxdA1oMYH_wYHDZVomE",
  authDomain: "coffeeandchill-13ed4.firebaseapp.com",
  projectId: "coffeeandchill-13ed4",
  storageBucket: "coffeeandchill-13ed4.appspot.com",
  messagingSenderId: "697216343545",
  appId: "1:697216343545:web:020dff7ef244bfd0a6f128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firebase
initializeApp(firebaseConfig);

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
