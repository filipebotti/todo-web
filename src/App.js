import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import  { faCheckSquare, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Main from './components/main.js';


library.add(faCheckSquare, faSignOutAlt);



class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ height: "100vh", width: "100vw" }}>
          <Route path="/" exact component={Login}/>        
          <Route path="/register" component={Register} />
          <Route path="/main" component={Main}/>
        </div>
      </Router>
    );
  }
}

export default App;
