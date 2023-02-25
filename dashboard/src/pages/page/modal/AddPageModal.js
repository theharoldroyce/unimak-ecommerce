import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import LinearCaregory from '../../../helper/LinearCategory'
import { useDispatch, useSelector } from 'react-redux'
import { CCol, CFormInput, CFormSelect, CRow } from '@coreui/react'
import { createPage } from '../../../actions'

const AddPageModal = ({ visibility: { show, setShow } }) => {

    const category = useSelector(state => state.category);
    const page = useSelector(state => state.page);

    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [banners, setBanners] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        setCategories(LinearCaregory(category.categories));
    }, [category]);

    useEffect(() => {
        if (!page.loading) {
            setShow(false);
            setTitle('');
            setCategoryId('');
            setDesc('');
            setProducts([]);
            setBanners([]);
        }

    }, [page]);

    const handleCategoryChange = (e) => {
        const category = categories.find(category => category._id == e.target.value);
        setCategoryId(e.target.value);
        setType(category.type);
    }

    const handleBannerImage = (e) => {
        setBanners([...banners, e.target.files[0]]);
    }

    const handleProductImage = (e) => {
        setProducts([...products, e.target.files[0]]);
    }

    const submitPageForm = (e) => {
        if (title === "") {
            alert("Title is required")
            setShow(false);
            return;
        }
        const form = new FormData();
        form.append('title', title);
        form.append('description', desc);
        form.append('category', categoryId);
        form.append('type', type);
        banners.forEach((banner, index) => {
            form.append('banners', banner)
        });
        products.forEach((product, index) => {
            form.append('products', product)
        });

        dispatch(createPage(form));
    }


    return (
        <>
            {
                page.loading ?
                    <p>Creating Page.... please wait</p>
                    :
                    <>
                        <Modal show={show} onHide={() => setShow(false)} size="md" centered={true} scrollable>
                            <Modal.Header className="justify-content-center" closeButton>
                                <Modal.Title className='fs-5'>
                                    Add Page
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <CRow>
                                    <CCol>
                                        <CFormSelect
                                            size="lg"
                                            aria-label="Default select example"
                                            className='form-control mb-3'
                                            value={categoryId}
                                            onChange={handleCategoryChange}
                                        >
                                            <option>Select Category </option>
                                            {
                                                categories.map(cat =>
                                                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                                                )
                                            }
                                        </CFormSelect>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol>
                                        <CFormInput
                                            type="text"
                                            id="floatingInputTitle"
                                            floatingClassName="mb-3"
                                            floatingLabel="Page Title"
                                            placeholder="Page Title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol>
                                        <CFormInput
                                            type="text"
                                            id="floatingInputDesc"
                                            floatingClassName="mb-3"
                                            floatingLabel="Page Description"
                                            placeholder="Page Description"
                                            value={desc}
                                            onChange={(e) => setDesc(e.target.value)}
                                        />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    {
                                        banners.length > 0 ?
                                            banners.map((banner, index) =>
                                                <CRow key={index}>
                                                    <CCol>{banner.name}</CCol>
                                                </CRow>
                                            ) : null
                                    }
                                    <CCol>
                                        <CFormInput
                                            className='mb-3'
                                            type="file"
                                            id="formFileBanner"
                                            label="Upload Banner"
                                            multiple
                                            onChange={handleBannerImage}
                                        />
                                    </CCol>
                                </CRow>
                                <CRow>
                                    {
                                        products.length > 0 ?
                                            products.map((product, index) =>
                                                <CRow key={index}>
                                                    <CCol>{product.name}</CCol>
                                                </CRow>
                                            ) : null
                                    }
                                    <CCol>
                                        <CFormInput
                                            className='mb-3'
                                            type="file"
                                            id="formFileProduct"
                                            label="Upload Product*"
                                            multiple
                                            onChange={handleProductImage}
                                        />
                                    </CCol>
                                </CRow>
                                <Button
                                    variant="primary"
                                    className="px-4 btn d-flex align-items-center justify-content-center text-white w-100 rounded-1"
                                    style={{ height: '3rem', backgroundColor: '#8624DB' }}
                                    onClick={submitPageForm}
                                >
                                    Save
                                </Button>
                            </Modal.Body>
                        </Modal>
                    </>
            }
        </>
    )
}
AddPageModal.propTypes = {
    visibility: PropTypes.any,
    data: PropTypes.any,
}
export default AddPageModal