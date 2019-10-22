import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import FileExplorer from './Components/FileExplorer/';
import Editor from './Components/Editor/';
import Reg from './register'
import LoginForm from './login'

function App() {
  return (
    <div className="App">
    	<Router>
      		<Reg path="/" />
      		<LoginForm path="/login" />
      		<FileExplorer path="/explore" />
      		<Editor path="/editor" />
      	</Router>
    </div>
  );
}

export default App;
