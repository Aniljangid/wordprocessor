import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import FileExplorer from './Components/FileExplorer/';
import Reg from './register'
import LoginForm from './login'

function App() {
  return (
    <div className="App">
    	<Router>
      		<Reg path="/" />
      		<LoginForm path="/login" />
      	</Router>
    </div>
  );
}

export default App;
