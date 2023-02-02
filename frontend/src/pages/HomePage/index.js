import React from 'react'
import Helmet from '../../components/Helmet'
import {
  MDBContainer,
  MDBCardTitle,
} from 'mdb-react-ui-kit';
import HomeHeader from './components/HomeHeader';
import Services from '../../components/Services';
import NewsLetter from '../../components/NewsLetter';
import BrandPartner from '../../components/BrandPartner';

const index = () => {
  return (
    <Helmet title={"Home"}>
      <section className='mb-3'>
        <HomeHeader />
      </section>
      <section className='mb-3'>
        <MDBContainer className="my-4 mb-5">
          <MDBCardTitle>
            <MDBContainer fluid className='text-center text-white p-4' style={{ backgroundColor: "#114232" }}>
              <h3 className="mb-2 fw-bolder">
                Featured Products
              </h3>
            </MDBContainer>
          </MDBCardTitle>
          <MDBContainer>
            <h1>ProductList</h1>
          </MDBContainer>
        </MDBContainer>
      </section>
      <section className='mb-3'>
        <Services />
      </section>
      <section className='mb-3'>
        <MDBContainer className="my-4 mb-5">
          <MDBCardTitle>
            <MDBContainer fluid className='text-center text-white p-4' style={{ backgroundColor: "#114232" }}>
              <h3 className="mb-2 fw-bolder">
                On Sale Products
              </h3>
            </MDBContainer>
          </MDBCardTitle>
          <MDBContainer>
            <h1>ProductList</h1>
          </MDBContainer>
        </MDBContainer>
      </section>
      <section className='mb-3'>
        <BrandPartner/>
      </section>
      <section className='mb-3'>
        <NewsLetter/>
      </section>
    </Helmet>
  )
}

export default index