import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';
import { SiMinutemailer } from "react-icons/si";

const NewsLetter = () => {
    return (
        <MDBContainer fluid style={{ backgroundColor: "#eee" }}>
            <MDBRow className='py-5'>
                <MDBCol size='md' className='col-md-6  text-center'>
                    <SiMinutemailer size={40} className='mr-2' /> Subscribe to our newsletter and be the first to hear our special offers!
                </MDBCol>
                <MDBCol size='md' className='col-md-4'>
                    <MDBInputGroup className='gap-2'>
                        <input className='form-control' placeholder="example@gmail.com" type='text' />
                        <MDBBtn color='success'>send email</MDBBtn>
                    </MDBInputGroup>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default NewsLetter