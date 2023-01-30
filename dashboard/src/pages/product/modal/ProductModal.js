import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal} from 'react-bootstrap';
import { CFormInput, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../actions/category.actions';
import { addProduct } from '../../../actions/product.actions';

const ProductModal = ({ visibility: { show, setShow } }) => {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();


    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [status, setStatus] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productImage, setProductImage] = useState([]);

    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;
    }

    const handleProductImage = (e) => {
        setProductImage([
            ...productImage,
            e.target.files[0]
        ])
    }

    const handleProduct = () => {

        const form = new FormData();
        form.append('name', name);
        form.append('quantity', quantity);
        form.append('price', price);
        form.append('description', description);
        form.append('status', status);
        form.append('category', categoryId);

        for (let pic of productImage) {
            form.append('productImage', pic)
        }

        dispatch(addProduct(form));
        setName('');
        setPrice('');
        setDescription('');
        setQuantity('');
        setStatus('');
        setCategoryId('');

        setShow(false);
    }
    

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} size="md" centered={true} >
                <Modal.Header className="justify-content-center" closeButton>
                    <Modal.Title className='fs-5'>
                        Add Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <CFormInput
                        type="text"
                        id="floatingInputName"
                        floatingClassName="mb-3"
                        floatingLabel="Enter Product Name *"
                        placeholder="Enter Product Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <CInputGroup
                        size="lg"
                        className="mb-3"
                    >
                        <CInputGroupText>₱</CInputGroupText>
                        <CFormInput
                            type="number"
                            id="floatingInpuPrice"
                            floatingLabel="Enter Price *"
                            placeholder="Enter Price *"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </CInputGroup>



                    <CFormInput
                        type="text"
                        id="floatingInputDecs"
                        floatingClassName="mb-3"
                        floatingLabel="Enter Description *"
                        placeholder="Enter Description *"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <CFormInput
                        type="text"
                        id="floatingInputQty"
                        floatingClassName="mb-3"
                        floatingLabel="Input Qantity *"
                        placeholder="Input Qantity  *"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />

                    <CFormSelect
                        size="lg"
                        aria-label="Default select example"
                        className="mb-3"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option>Select Status *</option>
                        <option value="On-Stock">On-Stock</option>
                        <option value="On-Sale">On-Sale</option>
                        <option value="Out-Stock">Out-Stock</option>
                        <option value="Low-Stock">Low-Stock</option>
                        <option value="Not-avaiable">Not-avaiable</option>
                    </CFormSelect>

                    <CFormSelect
                        size="lg"
                        aria-label="Default select example"
                        className="mb-3"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        <option>Select Category *</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                    </CFormSelect>

                    <div className="mb-3">
                        <CFormInput
                            size="lg"
                            type="file"
                            id="formFileMultiple"
                            label="Select Photos *"
                            multiple
                            onChange={handleProductImage}
                        />
                    </div>


                    <Button variant="primary"
                        className="px-4 btn d-flex align-items-center justify-content-center text-white w-100 rounded-1"
                        style={{ height: '3rem', backgroundColor: '#8624DB' }}
                        onClick={handleProduct}
                    >
                        Add Product
                    </Button>

                </Modal.Body>
            </Modal>
        </>
    )
}
ProductModal.propTypes = {
    visibility: PropTypes.any,
    data: PropTypes.any,
}
export default ProductModal