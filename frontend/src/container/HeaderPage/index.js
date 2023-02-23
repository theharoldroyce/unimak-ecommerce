import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

const HeaderPage = (props) => {
    return (
        <>
            <MDBNavbar light bgColor='light'>
                <MDBContainer>
                    <MDBNavbarBrand >

                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}

export default HeaderPage