import React from 'react'
import Helmet from '../../components/Helmet'
import {
  MDBContainer,
  MDBRow,
  MDBInputGroup,
  MDBCol,
} from 'mdb-react-ui-kit'
import NewsLetter from '../../components/NewsLetter'
import Form from 'react-bootstrap/Form';

const index = () => {
  return (
    <Helmet title={"Shop"}>
      <MDBContainer className='mt-3'>
        <MDBRow>
          <MDBCol className='d-flex gap-5 mx-5'>
            <Form.Select
              size="sm"
              style={{ height: '35px' }}
            >
              <option>Filter by Category</option>
              <option value="Building Materials">Building Materials</option>
              <option value="Hardware">Hardware</option>
              <option value="Paint">Paint</option>
              <option value="Shovel">Shovel</option>
              <option value="Fork">Fork</option>
            </Form.Select>

            <Form.Select
              size="sm"
              style={{ height: '35px' }}
            >
              <option>Sort By</option>
              <option value="Accending">Accending</option>
              <option value="Descending">Descending</option>
            </Form.Select>
          </MDBCol>

          <MDBCol className='d-flex justify-content-end mx-5'>
            <MDBInputGroup className='mb-3 w-50' noBorder >
              <input className='form-control' type='text' placeholder='Search' />
            </MDBInputGroup>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="my-4 mb-5">
        <h1>Products</h1>
      </MDBContainer>
      <NewsLetter />
    </Helmet>
  )
}

export default index