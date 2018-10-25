import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import  { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';


library.add(faCheckSquare);



class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ height: "100vh", width: "100vw" }}>
          <Route path="/" exact component={Login}/>        
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
