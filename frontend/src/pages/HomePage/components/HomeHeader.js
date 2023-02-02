import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
} from 'mdb-react-ui-kit';
import HeroCarou1 from '../../../assets/carousels/hero-c-2.jpg'
import HeroCarou2 from '../../../assets/carousels/hero-c-3.jpg'
import HeroCarou3 from '../../../assets/carousels/hero-c-4.jpg'
import HeroCarou4 from '../../../assets/carousels/hero-c-5.jpg'

const HomeHeader = () => {
    return (
        <MDBContainer className="mb-5">
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src={HeroCarou1}
                    alt='...'
                >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={HeroCarou2}
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={HeroCarou3}
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={4}
                    src={HeroCarou4}
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel>
        </MDBContainer>
    )
}

export default HomeHeader