import React from 'react';
import '../styles/App.css';
//my components
import InputFields from './InputFields'
import TopBar from './Topbar'
//ui stuff
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#46637f",
    height:"100vh"
  },
  paper: {
    padding:32,
  }
});

function MainForm() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TopBar />
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          <Typography variant="h2" gutterBottom align="center">
            Send a message!
          </Typography>
          <hr />
          <Typography variant="subtitle1" align="center" gutterBottom>
            Enter your name, email, and a personalized message to send an
            email with your very own message using AWS lambda functions, and store them in a DynamoDB!
          </Typography>
          <InputFields />
        </Paper>
      </Container>
    </div>
  );
}

export default MainForm;
