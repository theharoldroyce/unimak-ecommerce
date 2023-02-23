import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions';
import { useParams } from "react-router-dom";
import { generatePublicUrl } from '../../UrlConfig';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from 'mdb-react-ui-kit';
import Layout from '../Layout'
import './style.css'

const ProductList = (props) => {

    const { slug } = useParams();

    console.log(slug);
    const product = useSelector(state => state.product);
    const [productRange, setProductRange] = useState({
        under50p: 50,
        under100p: 100,
        under150p: 150,
        under200h: 200,
        under300h: 300,
    });
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductsBySlug(slug));
    }, []);

    return (
        <Layout>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <MDBContainer fluid className="my-5 text-center">
                            <h4 className="mt-4 mb-5">
                                <strong>{slug} Under {productRange[key]} Pesos</strong>
                            </h4>

                            <MDBRow className='row-cols-1 row-cols-md-6 my-1 my-md-3'>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <MDBCol className='mb-1 mb-md-4'>

                                            <MDBCard className='h-100'>
                                                <MDBRipple
                                                    rippleColor="light"
                                                    // rippleTag="div"
                                                    className="bg-image rounded hover-zoom"
                                                >
                                                    <MDBCardImage
                                                        src={generatePublicUrl(product.productImage[0].img)}
                                                        fluid
                                                        className="w-100"
                                                        height={230}
                                                    />
                                                    <a href="#!">
                                                        <div className="mask">
                                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                                <h5>
                                                                    <span className="badge bg-primary ms-2">New</span>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay">
                                                            <div
                                                                className="mask"
                                                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                            ></div>
                                                        </div>
                                                    </a>
                                                </MDBRipple>
                                                <MDBCardBody>
                                                    <a href="#!" className="text-reset">
                                                        <h5 className="card-title mb-3">Product name</h5>
                                                    </a>
                                                    <a href="#!" className="text-reset">
                                                        <p>Category</p>
                                                    </a>
                                                    <h6 className="mb-3">$61.99</h6>
                                                </MDBCardBody>
                                            </MDBCard>

                                        </MDBCol>
                                    )
                                }
                            </MDBRow>
                        </MDBContainer>
                    );
                })
            }
        </Layout>
    )
}

export default ProductList
