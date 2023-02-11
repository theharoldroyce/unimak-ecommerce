import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBCol,
} from 'mdb-react-ui-kit';


const ProductCard = () => {
    return (
        <>
            <MDBCol className='mb-4'>

                <MDBCard className='h-100'>
                    <MDBCardImage
                        className='p-1'
                        height={230}
                        width={150}
                        // src={product.productImage[0].img}
                        position="top"
                        alt='...'
                    />

                    <MDBCardBody>
                        <span className='d-block'><small>Brand: </small></span>
                        <span className='d-block'><small>Desc: </small></span>
                        <span className='d-block'><small>Model: </small></span>
                        <span className='d-block'><small>Size: </small></span>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </>
    )
}

export default ProductCard