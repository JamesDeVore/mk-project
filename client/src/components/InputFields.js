import React, { useState } from "react";
import useInput from "./customHooks/useInput";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email"
import Message from "@material-ui/icons/Message"
import PermIdentity from "@material-ui/icons/PermIdentity"
import FormControl from "@material-ui/core/FormControl"
import Button from "@material-ui/core/Button"
import Send from "@material-ui/icons/Send"

export default function InputFields() {
  const { values, handleChange, handleSubmit } = useInput(submit);
  const inputTypes = [
    {
      title: "First Name",
      name: "First",
      icon: PermIdentity,
      placeholder:"John"
    },
    {
      title: "Last Name",
      name: "Last",
      icon: PermIdentity,
      placeholder:"Doe"
    },
    {
      title: "Email",
      name: "Email",
      icon: Email,
      placeholder:"JohnnyD@website.com"
    },
    {
      title: "Your Message",
      name: "Message",
      type: "multiline",
      icon: Message,
      placeholder:"Type your message here!"
    }
  ];

  function submit() {
    console.log(values);
  }
  console.log(Email)
  return (
    <Grid container justify="center" spacing={3}>
      {inputTypes.map(inputField => {
        let { name, title, type, icon, placeholder } = inputField;
        return (
          <Grid item xs={8}>
            <FormControl required fullWidth>
              <TextField
                name={name}
                label={title}
                onChange={handleChange}
                value={values.name}
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
      <Grid xs={8}>
        <Button
          fullWidth
          color="primary"
        >Submit &nbsp;<Send variant="contained"/></Button>
      </Grid>
    </Grid>
  );
}
