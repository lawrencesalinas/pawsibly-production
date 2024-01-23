import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { signIn } from "../../context/user/UserAction"
import messages from "../shared/AutoDismissAlert/messages"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import './css/signin.css'


const SignIn = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const onSignIn = (event) => {
    event.preventDefault()
    // console.log('the props', props)
    const { msgAlert, setUser } = props

    const credentials = { email, password }

    signIn(credentials)
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: "Sign In Success",
          message: messages.signInSuccess,
          variant: "success",
        })
      )
      .then(() => navigate("/"))
      .catch((error) => {
        setEmail("")
        setPassword("")
        msgAlert({
          heading: "Invalid username or password. Please try again.",
          message: messages.signInFailure,
          variant: "danger",
        })
      })
  }

  return (
    <div className="sign-in-wrapper">
      <div className="left">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Welcome Back!</h3>
          <Form className="authentication-form" onSubmit={onSignIn}>
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
            <Button variant="warning" type="submit">
              Sign in
            </Button>
          </Form>
        </div>
      </div>
      <div className="right">
        <div className="right-wrapper">
          <img src="/static/images/auth-img-min.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignIn
