import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Button, Form, Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import Logo from '../assets/images/logo-unimak.png';
import { login } from "../actions"
import { useDispatch, useSelector } from 'react-redux'
import { CFormInput } from '@coreui/react';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();



    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email,
            password
        }

        dispatch(login(user));
    }

    if (auth.authenticate) {
        return <Navigate to='/' />
    }

    return (
        <>
            <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <CardGroup>
                                <Card className="p-4">
                                    <Card.Body>
                                        <h4 className='text-center mb-4'>
                                            <dt>Sign In to your account</dt>
                                        </h4>
                                        <Form onSubmit={userLogin}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <CFormInput
                                                    type="email"
                                                    id="floatingInput"
                                                    floatingClassName="mb-3"
                                                    floatingLabel="Email address"
                                                    placeholder="name@example.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">Invalid Email</Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <CFormInput
                                                    type="password"
                                                    id="floatingPassword"
                                                    floatingLabel="Password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">Invalid Password</Form.Control.Feedback>
                                            </Form.Group>

                                            <Button variant="primary" type="submit"
                                                className="px-4 btn  d-flex align-items-center justify-content-center text-white w-100 rounded-1"
                                                style={{ height: '3rem', backgroundColor: '#8624DB' }}
                                            >
                                                Login
                                            </Button>

                                        </Form>
                                    </Card.Body>
                                </Card>
                                <Card className="text-white py-5" style={{ width: '44%' }}>
                                    <Card.Body className="text-center">
                                        <img src={Logo} style={{ width: '90%' }} alt="logo" />
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Login