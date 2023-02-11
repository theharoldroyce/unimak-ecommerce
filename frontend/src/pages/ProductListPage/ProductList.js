import React from 'react'
import { MDBRow } from 'mdb-react-ui-kit';
import ProductCard from './ProductCard';

const ProductList = () => {

    return (
        <>
            <MDBRow className='row-cols-1 row-cols-md-4 mt-1 mt-md-3'>
                <ProductCard />
            </MDBRow>
        </>
    )
}

export default ProductList