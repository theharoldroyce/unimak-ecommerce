import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, Form } from 'react-bootstrap';
import { CFormInput, CFormSelect } from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategory } from '../../../actions/category.actions';


const CategoryModal = ({ visibility: { show, setShow } }) => {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');

    useEffect(() => {
        if (!category.loading) {
            setShow(false);
        }
    }, [category.loading]);

    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

    const hanldeSaveCategory = () => {

        const form = new FormData();

        if (categoryName === "") {
            alert('Category name is required')
            setShow(false);
            return;
        }

        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));
        setCategoryName('');
        setParentCategoryId('');

        setShow(false)
    };


    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} size="md" centered={true} >
                <Modal.Header className="justify-content-center" closeButton>
                    <Modal.Title className='fs-5'>
                        Create a Category
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <CFormInput
                            type="text"
                            id="floatingInput"
                            floatingClassName="mb-3"
                            floatingLabel="Category name *"
                            placeholder="Category name "
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />

                        <CFormSelect
                            aria-label="Default select example"
                            className='form-control mb-3'
                            value={parentCategoryId}
                            onChange={(e) => setParentCategoryId(e.target.value)}
                        >
                            <option>Select Category </option>
                            {
                                createCategoryList(category.categories).map(option =>
                                    <option key={option.value} value={option.value}>{option.name}</option>)
                            }
                        </CFormSelect>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Photo</Form.Label>
                            <Form.Control
                                type="file"
                                name="categoryImage"
                                onChange={handleCategoryImage}
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={hanldeSaveCategory}
                            className="px-4 btn d-flex align-items-center justify-content-center text-white w-100 rounded-1"
                            style={{ height: '3rem', backgroundColor: '#8624DB' }}
                        >
                            Create Category
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

CategoryModal.propTypes = {
    visibility: PropTypes.any,
    data: PropTypes.any,
}
export default CategoryModal