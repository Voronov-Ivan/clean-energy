import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

import Main from './features/Main/Main';
import Footer from './features/Footer/Footer';
import Header from './features/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Main/>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
