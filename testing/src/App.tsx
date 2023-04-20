import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/application'
import { Skills } from './components/skills/Skills'
import  Counter  from './components/counter/Counter'
import Users from './components/users/Users'
import {AppProviders} from './providers/AppProviders';
import { MuiMode } from './components/mui/MuiMode';

function App() {
  return (
        // <div className="App-header">
        //   < Application />
        //   < Skills skills={["HTML", "CSS", "JAVASCRIPT"]} />
        //   <Counter/>
        // </div>
        <AppProviders>
          <div className="App">
            <MuiMode/>
          </div>
            <Users/>
        </AppProviders>
  );
}

export default App;
