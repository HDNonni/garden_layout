import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <div className="App">
        <Main />
    </div>
  );
}

export default App;
