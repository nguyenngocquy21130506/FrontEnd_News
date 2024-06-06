import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import RouterConfig from './components/router';

function App() {
  return (
    <div className="App">
        <RouterConfig></RouterConfig>
    </div>
  );
}

export default App;
