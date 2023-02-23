import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import { useParams } from "react-router-dom";
import { generatePublicUrl } from '../../UrlConfig';
import {
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBCol,
} from 'mdb-react-ui-kit';


const ProductCard = (props) => {

    const { slug } = useParams();

    console.log(slug);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductsBySlug(slug));
    }, []);

    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <MDBRow className='row-cols-1 row-cols-md-4 mt-1 mt-md-3'>
                            <div>
                                <h3>Under 1000 php</h3>
                            </div>
                            {
                                product.productsByPrice[key].map(product =>
                                    <MDBCol>
                                        <MDBCard className='h-100'>
                                            <MDBCardImage
                                                className='p-1'
                                                height={230}
                                                width={150}
                                                // src={generatePublicUrl(product.productImage[0].img)}
                                                position="top"
                                                alt='...'
                                            />
                                            <MDBCardBody>
                                                <span className='d-block'><small>{product.name} </small></span>
                                                <span className='d-block'><small>{product.price} </small></span>
                                                <span className='d-block'><small> </small></span>
                                                <span className='d-block'><small></small></span>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                )
                            }
                        </MDBRow>
                    );
                })
            }
        </>
    )
}

export default ProductCard