import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from "react-router";
import routes from "./routes";


// const createStoreWithMiddleware = applyMiddleware(
// )(createStore);

ReactDOM.render(

   <Router history={ browserHistory } routes={ routes } />
  , document.querySelector(".app"));


