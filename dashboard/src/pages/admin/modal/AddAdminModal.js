import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../../actions/admin.actions';
import { CFormInput } from '@coreui/react';

const AddAdminModal = ({ visibility: { show, setShow } }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const adminSignup = (e) => {

    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email, 
      password
    }

    dispatch(signup(user));
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');

    setShow(false);

  }


  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} size="md" centered={true} >
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title className='fs-5'>
            Create a new account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={adminSignup}>
            <CFormInput
              type="text"
              id="floatingInputFn"
              floatingClassName="mb-3"
              floatingLabel="Firstname"
              placeholder="Firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <CFormInput
              type="text"
              id="floatingInputLn"
              floatingClassName="mb-3"
              floatingLabel="Lastname"
              placeholder="Lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <CFormInput
              type="email"
              id="floatingInputEm"
              floatingClassName="mb-3"
              floatingLabel="Email address"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <CFormInput
              type="password"
              id="floatingPassword"
              floatingClassName="mb-3"
              floatingLabel="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="primary" type="submit"
              className="px-4 btn d-flex align-items-center justify-content-center text-white w-100 rounded-1"
              style={{ height: '3rem', backgroundColor: '#8624DB' }}
            >
              Create new Admin
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
AddAdminModal.propTypes = {
  visibility: PropTypes.any,
  data: PropTypes.any,
}
export default AddAdminModal