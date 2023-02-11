import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdb-react-ui-kit';

const FootherSection = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto my-5'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Unimak Builders Supply
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto my-5'>
                            <h6 className='text-uppercase fw-bold mb-4'>Questions</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Payments
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Collect and Deliver
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Returns and Exchange
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Product Warranty
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto my-5'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Privacy Policy
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Term of Use
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    FAQ
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 my-5'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                San Vicente, Calapan City, Philippines
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                unimak@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 639 228 598 977
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:&emsp;
                <a className='text-reset fw-bold' href='https://haroldroyce-webportfolio.web.app/'>
                    &emsp;theharoldroyce
                </a>
            </div>
        </MDBFooter>
    )
}

export default FootherSection