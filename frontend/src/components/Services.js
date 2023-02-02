import React from 'react'
import { SectionData } from '../Data'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBContainer
} from 'mdb-react-ui-kit';

const Services = () => {
    return (
        <MDBContainer fluid className='p-3'>
            <hr />
            <MDBRow className='row-cols-1 row-cols-md-3 g-4 text-center mx-2 mx-lg-4'>
                {SectionData.map(({ id, src, title, desc }) => (
                    <div key={id}>
                        <MDBCol >
                            <MDBCard className='h-100 bg-success text-white'>
                                <MDBCardBody>
                                    <MDBCardTitle>
                                        {src} {title}
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        {desc}
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>
                ))}
            </MDBRow>
            <hr />
        </MDBContainer>
    )
}

export default Services