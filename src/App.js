//Coded by Srikar Kovvali
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <AmplifySignOut/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to CEG4399 Lab2.
        </p>
      </header>
    </div>
  );
}

export default withAuthenticator(App)
