import React, { useState } from "react"
import styled from "styled-components"
import { TextField, Button } from "@material-ui/core"

const StyledForm = styled.form`
  width: 100%;
  .MuiFormControl-root {
    margin: 1em 0;
    width: 100%;
  }
`

const ContactForm = props => {
  const [name, updateName] = useState("")
  const [email, updateEmail] = useState("")
  const [subject, updateSubject] = useState("")
  const [message, updateMessage] = useState("")
  const [nameValidError, updateNameValid] = useState("")
  const [emailValidError, updateEmailValid] = useState("")
  const [subjectValidError, updateSubjectValid] = useState("")
  const [messageValidError, updateMessageValid] = useState("")

  const handleChange = (event, updateHandler) => {
    const { value } = event.target
    updateHandler(value)
  }

  const validateInput = () => {
    let valid = true
    if (name.trim() === "") {
      valid = false
      updateNameValid("Name is required")
    }
    if (email.trim() === "") {
      valid = false
      updateEmailValid("Email is required")
    }
    if (subject.trim() === "") {
      valid = false
      updateSubjectValid("Subject is required")
    }
    if (message.trim() === "") {
      valid = false
      updateMessageValid("Message is required")
    }
    return valid
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const valid = validateInput()
    if (!valid) {
      return
    }
    console.log("Vaid Input")
    console.log(await fetch("/.netlify/functions/sendEmail"))
  }

  return (
    <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField
        error={nameValidError ? true : false}
        id="name"
        label="Name"
        value={name}
        onChange={event => handleChange(event, updateName)}
        onFocus={() => updateNameValid("")}
        variant="outlined"
        helperText={nameValidError ? nameValidError : undefined}
      />
      <TextField
        error={emailValidError ? true : false}
        id="email"
        label="Email"
        value={email}
        onChange={event => handleChange(event, updateEmail)}
        onFocus={() => updateEmailValid("")}
        variant="outlined"
        helperText={emailValidError ? emailValidError : undefined}
      />
      <TextField
        error={subjectValidError ? true : false}
        id="subject"
        label="Subject"
        value={subject}
        onChange={event => handleChange(event, updateSubject)}
        onFocus={() => updateSubjectValid("")}
        variant="outlined"
        helperText={subjectValidError ? subjectValidError : undefined}
      />
      <TextField
        error={messageValidError ? true : false}
        id="message"
        label="Message"
        value={message}
        multiline
        rows={10}
        onChange={event => handleChange(event, updateMessage)}
        onFocus={() => updateMessageValid("")}
        variant="outlined"
        helperText={messageValidError ? messageValidError : undefined}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </StyledForm>
  )
}

export default ContactForm
