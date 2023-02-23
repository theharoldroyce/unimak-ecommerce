import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import { generatePublicUrl } from '../../UrlConfig';
import {
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBCol,
} from 'mdb-react-ui-kit';


const ProductList = (props) => {

    const dispatch = useDispatch();
    // const product = useSelector(state => state.product);
    
    // useEffect(() => {
    //     if (props.match) {
    //         const { match } = props;
    //         dispatch(getProductsBySlug(match.params.product));
    //     }
    // }, []);

     useEffect(() => {
        console.log(props);
        dispatch(getProductsBySlug())
     }, [])
    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <MDBRow className='row-cols-1 row-cols-md-4 mt-1 mt-md-3' key={index}>
                            <div>
                                <h3>Under 1000 php</h3>
                            </div>
                            <MDBCol>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <MDBCard className='h-100' key={index}>
                                            <MDBCardImage
                                                className='p-1'
                                                height={230}
                                                width={150}
                                                src={generatePublicUrl(product.productImage[0].img)}
                                                position="top"
                                                alt='...'
                                            />

                                            <MDBCardBody>
                                                <span className='d-block'><small> </small></span>
                                                <span className='d-block'><small> </small></span>
                                                <span className='d-block'><small> </small></span>
                                                <span className='d-block'><small></small></span>
                                            </MDBCardBody>
                                        </MDBCard>
                                    )
                                }
                            </MDBCol>
                        </MDBRow>
                    )
                })
            }
        </>
    )
}

export default ProductList