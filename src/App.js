import React from "react";
import { Grid, Typography } from "@material-ui/core";

import "./App.css";

import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <Grid container sm={6} id="myForm">
      <header>
        <Typography variant="h1" align="center" className="heading">
          CREATE TEAM
        </Typography>
      </header>

      <main>
        <LoginForm></LoginForm>
      </main>
    </Grid>
  );
}

export default App;
