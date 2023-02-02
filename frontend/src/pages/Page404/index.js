import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

const index = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-medium-emphasis float-start">
                The page you are looking for was not found.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center text-center">
          <MDBCol>
            <NavLink to="/" element={NavLink}>
              <MDBBtn>GO Back</MDBBtn>
            </NavLink>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default index