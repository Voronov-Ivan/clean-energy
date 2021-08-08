import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './features/Main/Main';
import Footer from './features/Footer/Footer';
import Header from './features/header/Header';
import Catalog from './features/Main/Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <img src="/img/b_calc.jpg"/>
        <Main/>
        {/* <Switch>
        <Route path='/catalog'><Catalog/></Route>
        </Switch> */}
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
