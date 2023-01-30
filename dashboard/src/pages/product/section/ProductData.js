import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitialData } from '../../../actions/initialData.actions';

const ProductData = () => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);


    useEffect(() => {
        dispatch(getInitialData());
    }, []);

    const renderProducts = () => {
        return (
            <Table responsive="sm" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Desciption</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                            product.products.map(product =>
                                <tr key={product._id}>
                                    <td>2</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.description}</td>
                                    <td>category</td>
                                </tr>
                            ) : null
                    }
                </tbody>
            </Table >
        )
    }
    return (
        <>
            <CRow>
                <CCol>
                    {renderProducts()}
                </CCol>
            </CRow>

        </>
    )
}

export default ProductData