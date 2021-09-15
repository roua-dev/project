import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../js/actions/userActions';


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const dispatch = useDispatch()
    const registerUser = (e) => {
        e.preventDefault()
        const newUser = { name, lastName, email, password }
        dispatch(register(newUser))
    }

    const { isAuth, loading ,errors } = useSelector(state => state.userReducer)

    return (
        <div className=" col-md-7  mt-3 mx-auto" >
            { errors.id === "register" && <Alert variant="danger">{  errors.err[0].msg}</Alert>} 
            {
                loading ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> : isAuth ? <Redirect to="/profile" /> :
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Name" onChange={e => setName(e.target.value)} value={name} />

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Last Name" onChange={e => setLastName(e.target.value)} value={lastName} />

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />

                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="submit" onClick={registerUser} >
                            Submit
                        </Button>
                    </Form>
            }
        </div>
    )
}

export default Register
