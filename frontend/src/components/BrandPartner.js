import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Brand } from "../Data"
import {
  MDBContainer,
  MDBCardTitle,
  MDBCard,
} from 'mdb-react-ui-kit';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const BrandPartner = () => {
  return (
    <MDBContainer className="text-center my-4 mb-3">
      <MDBCardTitle className="mb-3">
        <p className="text-black fw-bolder">
          Meet Our Brand Partners
        </p>
      </MDBCardTitle>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        arrows={false}
        autoPlaySpeed={1000}
      >
        {Brand.map(({ id, src }) => (
          <div key={id}>
            <MDBCard>
              <img src={src} alt="/" />
            </MDBCard>
          </div>
        ))}
      </Carousel>
    </MDBContainer>
  )
}

export default BrandPartner