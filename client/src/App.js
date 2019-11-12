import React from 'react';
import './App.css';

import Login from './components/Login.js';
import SignUp from './components/SignUp.js';

function App() {
  return (
    <div className="App">
      <h2>Hello!</h2>
      <Login/>
      <SignUp/>
    </div>
  );
}

export default App;
