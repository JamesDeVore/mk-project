import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useInput from "./customHooks/useInput";

//ui stuff
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Message from "@material-ui/icons/Message";
import PermIdentity from "@material-ui/icons/PermIdentity";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles({
  page: {
    padding: "28px"
  },
  submitButton: {
    background: "#00a99d",
    color: "white",
    "&:hover": {
      background: "#00776f"
    }
  }
});

export default function InputFields() {
  const { values, handleChange, clearValues } = useInput(submit);

  const [error, setError] = useState({
    First: false,
    Last: false,
    Email: false,
    Message: false
  });
  //will be mapped over to create the fields
  const inputTypes = [
    {
      title: "First Name",
      name: "First",
      icon: PermIdentity,
      placeholder: "John",
      size: 10,
      required: true
    },
    {
      title: "Last Name",
      name: "Last",
      icon: PermIdentity,
      placeholder: "Doe",
      size: 10
    },
    {
      title: "Email",
      name: "Email",
      icon: Email,
      placeholder: "JohnnyD@website.com",
      size: 10,
      required: true,
      helperText: "A valid email is required"
    },
    {
      title: "Your Message",
      name: "Message",
      type: "multiline",
      icon: Message,
      placeholder: "Type your message here!",
      size: 10
    }
  ];

  function handleValidation(value, fieldName) {
    let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
    //some minor form validation
    if (!value) {
      //need to make a new object, NOT modify the state
      let newState = Object.assign({}, error);
      error[fieldName] = true;
      setError(newState);
    } else if (fieldName === "Email" && !value.match(emailRegex)) {
      //need special validation for email
      let newState = Object.assign({}, error);
      error["Email"] = true;
      setError(newState);
    } else {
      let newState = Object.assign({}, error);
      error[fieldName] = false;
      setError(newState);
    }
  }

  function submit() {
    for (let field in values) {
      handleValidation(values[field], field);
    }
    if (!error.First && !error.Email && !error.Message) {
      let name = values.First + values.Last === "" ? "" : values.Last;
      let queryString = `name=${name}&email=${values.Email}&message=${
        values.Message
      }`;
      fetch(
        `https://g2bqem4y6l.execute-api.us-east-1.amazonaws.com/beta/main?${queryString}`,
        {
          mode: "cors",
          headers: {
            "content-type": "application/json"
          }
        }
      )
        .then(r => r.json())
        .then(res => console.log(res))
        .finally(() => {
          alert("Email sent, please be patient it may take a couple minutes");
          clearValues();
        })
        .catch(err => console.log(err));
    } else {
      alert("Please fill in the required fields")
    }
  }

  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={4}>
      {inputTypes.map(inputField => {
        let { name, title, type, icon, size, helperText } = inputField;
        return (
          <Grid item xs={size} key={name}>
            <FormControl required fullWidth>
              <TextField
                name={name}
                label={title}
                onChange={handleChange}
                value={values.name}
                helperText={helperText}
                error={error[name]}
                multiline={type === "multiline"}
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {React.createElement(icon, {})}
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          </Grid>
        );
      })}
      <Grid xs={6}>
        <Button className={classes.submitButton} fullWidth onClick={submit}>
          Submit &nbsp;
          <Send variant="contained" />
        </Button>
      </Grid>
    </Grid>
  );
}
