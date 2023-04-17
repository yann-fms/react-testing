import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/application'
import { Skills } from './components/skills/Skills'

function App() {
  return (
        <div className="App-header">
          {/* < Application /> */}
          < Skills skills={["HTML", "CSS", "JAVASCRIPT"]} />
        </div>
  );
}

export default App;
