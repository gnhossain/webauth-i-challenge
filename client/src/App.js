import React from 'react';
import './App.css';

import SignUp from './components/SignUp.js';
import Login from './components/Login.js';

function App() {
  return (
    <div className="App">
      <h2>Hello!</h2>
      <SignUp/>
      <Login/>
    </div>
  );
}

export default App;
