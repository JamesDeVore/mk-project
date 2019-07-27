import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { ThemeProvider } from '@material-ui/styles';
import MainForm from './components/MainForm';

ReactDOM.render(
  <ThemeProvider >
    <MainForm />
  </ThemeProvider>,
  document.getElementById("root")
);

