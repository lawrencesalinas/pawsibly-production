import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signUp, signIn } from "../../context/user/UserAction"
import messages from "../shared/AutoDismissAlert/messages"
import { Form, Button } from "react-bootstrap"

const divStyle = {
  height: "80vh",
}
const SignUp = (props) => {
  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const navigate = useNavigate()

  const onSignUp = (event) => {
    event.preventDefault()

    const { msgAlert, setUser } = props

    const credentials = {
      first_name,
      last_name,
      email,
      password,
      passwordConfirmation,
    }

    signUp(credentials)
      .then(() => signIn(credentials))
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: "Sign Up Success",
          message: messages.signUpSuccess,
          variant: "success",
        })
      )
      .then(() => navigate("/"))
      .catch((error) => {
        setEmail("")
        setPassword("")
        setPasswordConfirmation("")
        msgAlert({
          heading: "Sign Up Failed with error: " + error.message,
          message: messages.signUpFailure,
          variant: "danger",
        })
      })
  }

  return (
    <div className="row" style={divStyle}>
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Sign Up</h3>
        <Form onSubmit={onSignUp}>
          <Form.Group controlId="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="first_name"
              value={first_name}
              placeholder="Enter first name"
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              value={last_name}
              placeholder="Enter last name"
              onChange={(e) => setLast_name(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="passwordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
