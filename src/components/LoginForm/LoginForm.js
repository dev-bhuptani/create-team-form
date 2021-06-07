import React from "react";
import { Checkbox, Grid } from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import "./LoginForm.css";

function LoginForm() {
  return (
    <form action="" method="POST" id="main-form">
      <Grid container>
        <Grid item md={4} container>
          <label className="form-label">Team Name</label>
        </Grid>

        <Grid item md={8} container justify="center">
          <input
            type="text"
            name="teamName"
            placeholder="Enter Name"
            className="form-text-input"
          ></input>
        </Grid>

        <Grid item md={4} container>
          <label className="form-label">Game</label>
        </Grid>

        <Grid item md={8} container justify="center">
          <input
            type="text"
            name="game"
            placeholder="Enter Game"
            className="form-text-input"
          ></input>
        </Grid>

        <Grid item md={4} container>
          <label className="form-label">Invite Players</label>
        </Grid>

        <Grid item md={8} container justify="center">
          <input
            type="text"
            name="invitePlayers"
            placeholder="Search"
            className="form-text-input"
          ></input>
        </Grid>

        <Grid item md={4}></Grid>

        <Grid item md={8} container justify="flex-start">
          {/* <h1 id="text-or">OR</h1> */}
          <div id="div-or">
            <span id="text-or">OR</span>
          </div>
        </Grid>

        <Grid item md={4} container>
          <label className="form-label">Invite By Phone</label>
        </Grid>

        <Grid item md={8} container justify="center">
          <input
            type="text"
            name="inviteByPhone"
            placeholder="Enter Phone Number"
            className="form-text-input"
          ></input>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justify="center"
          alignItems="center"
          id="form-checkbox"
        >
          {/* <input type="checkbox" id="form-checkbox-input"></input> */}
          <Checkbox
            checkedIcon={<CheckBoxIcon fontSize="medium" color="red" />}
          ></Checkbox>
          <label>Permanent Team</label>
        </Grid>

        <Grid item md={12} container justify="center">
          <input type="submit" value="SUBMIT" id="submit-btn"></input>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm;
