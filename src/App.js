import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import  { faCheckSquare, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Main from './components/main.js';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import sagas from './sagas';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(sagas);

library.add(faCheckSquare, faSignOutAlt);



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div style={{ height: "100vh", width: "100vw" }}>
            <Route path="/auth" exact component={Login}/>        
            <Route path="/register" component={Register} />
            <Route path="/" component={Main}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
