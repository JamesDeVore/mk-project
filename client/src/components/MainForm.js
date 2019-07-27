import React from 'react';
import '../styles/App.css';
import InputFields from './InputFields'
import TopBar from './Topbar'

import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button"

function MainForm() {
  return (
    <div>
      <TopBar />
      <Container>
        <Paper>
          <Typography variant="h2" gutterBottom  align="center">
            Send a message!
          </Typography>
          <hr />
          <Typography variant="subtitle">
            Enter your name, email, and a personalized message to send an
            email with your very own message!
          </Typography>

          <InputFields />
        </Paper>
      </Container>
    </div>
  );
}

export default MainForm;
