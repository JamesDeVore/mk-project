import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background: "#303c47",
    border: 0,
    marginBottom: 18,
    boxShadow: "0 1px 5px 2px #00a99d",
    color: "white",
    padding: "0 30px"
  }
});

export default function Topbar() {
  const classes = useStyles()
  return (
    <div>
      <AppBar className={classes.root} position="static" color="default">
        <Toolbar>
          <Typography variant="h5">
            MK Decisions
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

