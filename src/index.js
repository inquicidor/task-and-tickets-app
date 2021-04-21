import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firebase,{FirebaseContext} from './server';

import {initialState} from './session/initialState'
import {StateProvider} from './session/store';
import sessionReducer from './session/reducers/sessionReducer';

import {mainReducer} from './session/reducers'

//const FirebaseContext = React.createContext();


ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value ={new Firebase()} >
      <StateProvider initialState = {initialState} reducer = {sessionReducer}>
        <App />
      </StateProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
