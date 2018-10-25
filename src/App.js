import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import  { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login';


library.add(faCheckSquare);



class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Login}/>        
      </Router>
    );
  }
}

export default App;
