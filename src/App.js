import React, { Component, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import TaskList from "./component/view/TaskList";
import AppNavbar from "./component/Layout/AppNavbar";
import RegisterUser from "./component/segurity/RegisterUser";
import Login from "./component/segurity/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import {FirebaseContext}from './server';

function App(props) {
  let firebase = React.useContext(FirebaseContext);
  const [autenticationIni, setupFirebaseInicial]= React.useState(false);

  useEffect(()=>{
    firebase.isInit().then(val=>{
      setupFirebaseInicial(val);
    });
  });

  return autenticationIni!==false ? (
    <Router>
      <ThemeProvider theme={theme}>
        <AppNavbar />
        <Grid container>
          <Switch>
            <Route path="/" exact component={TaskList} />
            <Route path="/auth/Register_User" exact component={RegisterUser} />
            <Route path="/auth/Login" exact component={Login} />
          </Switch>
        </Grid>
      </ThemeProvider>
    </Router>
  ): 
  null
  ;
}

export default App;
