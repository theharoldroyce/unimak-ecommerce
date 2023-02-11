import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import ProductData from './ProductData'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { getInitialData } from '../../../actions/initialData.actions'


const columns = [
    {
        name: '#',
        selector: row => row.no,
        sortable: true,
    },
    {
        name: 'Product Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Brand Name',
        selector: row => row.brand,
        sortable: true,
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
    },
    {
        name: 'Quantity',
        selector: row => row.qty,
        sortable: true,
    },
    {
        name: 'Description',
        selector: row => row.desc,
        sortable: true,
    },
    {
        name: 'Category',
        selector: row => row.cat,
        sortable: true,
    },
];


const ProductTable = () => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);


    useEffect(() => {
        dispatch(getInitialData());
    }, []);

  
    const getList = () => {
        let data = []
        if (product.products.length > 0) {
            product.products.map((product) => {
                data.push({
                    no: product._id,
                    name: product.name,
                    brand:product.brand,
                    price: product.price,
                    qty: product.quantity,
                    desc: product.description,
                    cat: product.category.name,
                })
            })
        }
        return data.length > 0 ? data : []
    }

    return (
        <>
            <CCard>
                <CCardBody>
                    <CRow className="justify-content-end" >
                        <CCol xs={4} sm={4} md={4}>
                            <InputGroup className="my-3 gap-2">
                                <Form.Control
                                    placeholder="Search Here"
                                    aria-label="Search Here"
                                    aria-describedby="basic-addon2"
                                />
                                <Button
                                    style={{ backgroundColor: '#8624DB', outline: '#8624DB' }}
                                >
                                    Search
                                </Button>
                            </InputGroup>
                        </CCol>
                    </CRow>
                </CCardBody>
                <CCardBody>
                    <DataTable
                        responsive={true}
                        persistTableHead={true}
                        columns={columns}
                        data={getList()}
                        pagination
                        fixedHeaderScrollHeight='370px'
                        highlightOnHover={true}
                    />
                    {/* <ProductData/> */}
                </CCardBody>
            </CCard>
        </>
    )
}

export default ProductTable