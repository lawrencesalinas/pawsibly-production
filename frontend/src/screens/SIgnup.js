import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { register, reset } from "../features/auth/authSlice"
import { Form, Button } from "react-bootstrap"
import { toast } from "react-toastify"
import Spinner from "../components/shared/Spinner"
const divStyle = {
  height: "80vh",
}

function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  const { first_name, last_name, email, password, passwordConfirmation } =
    formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  console.log(isSuccess)
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/")
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onchange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== passwordConfirmation) {
      toast.error("passwords do not match")
    } else {
      const userData = {
        first_name,
        last_name,
        email,
        password,
        passwordConfirmation,
      }
      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="row" style={divStyle}>
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Sign Up</h3>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="first_name"
              value={first_name}
              placeholder="Enter first name"
              onChange={onchange}
            />
          </Form.Group>

          <Form.Group controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              value={last_name}
              placeholder="Enter last name"
              onChange={onchange}
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
              onChange={onchange}
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
              onChange={onchange}
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
              onChange={onchange}
            />
          </Form.Group>
          <Button variant="warning" style={{ marginTop: '30px' }} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Signup
