import React from 'react'
import Helmet from '../../components/Helmet'
import { MDBContainer } from 'mdb-react-ui-kit'
import NewsLetter from '../../components/NewsLetter'
import ShopHeader from './section/ShopHeader';

const index = () => {
  return (
    <Helmet title={"Shop"}>
      <MDBContainer className='mt-3'>
        <ShopHeader/>
      </MDBContainer>
      <MDBContainer className="my-4 mb-5">
        <h1>Products</h1>
      </MDBContainer>
      <NewsLetter />
    </Helmet>
  )
}

export default index