import React, { useState } from 'react'
import { Button, Col, Row, Form, Modal } from 'react-bootstrap'
import { CFormInput, CFormSelect } from '@coreui/react';
import { useSelector } from 'react-redux';

const UpdateCategoryModal = (props) => {

    const category = useSelector(state => state.category);
    const [openUpdateCategory, setOpenUpdateCategory] = useState(false)

    const {
        show,
        onHide,
        size,
        centered,
        expandedArray,
        checkedArray,
        handleCategoryInput,
        createCategoryList,
        updateCategoriesForm
    } = props


    return (
        <>
            <Modal
                show={openUpdateCategory}
                onHide={() => setOpenUpdateCategory(false)}
                size="md"
                centered={true}
            >
                <Modal.Header className="justify-content-center" closeButton>
                    <Modal.Title className='fs-5'>
                        Update Category
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <h5>Expanded Category</h5>
                            </Col>
                        </Row>
                        {
                            expandedArray.length > 0 &&
                            expandedArray.map((item, index) =>
                                <Row key={index}>
                                    <Col>
                                        <CFormInput
                                            type="text"
                                            id="floatingInputExpanded"
                                            floatingClassName="mb-3"
                                            floatingLabel="Category name *"
                                            placeholder="Category name "
                                            value={item.name}
                                            onChange={(e) => handleCategoryInput('name', e.target.value, index, 'expanded')}
                                        />
                                    </Col>

                                    <Col>
                                        <CFormSelect
                                            aria-label="Default select example"
                                            className='form-control mb-3'
                                            value={item.parentId}
                                            onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'expanded')}
                                        >
                                            <option>Select Category </option>
                                            {
                                                createCategoryList(category.categories).map(option =>
                                                    <option key={option.value} value={option.value}>{option.name}</option>)
                                            }
                                        </CFormSelect>
                                    </Col>
                                </Row>
                            )
                        }
                        <Row>
                            <Col>
                                <h5>Checked Category</h5>
                            </Col>
                        </Row>
                        {
                            checkedArray.length > 0 &&
                            checkedArray.map((item, index) =>
                                <Row key={index}>
                                    <Col>
                                        <CFormInput
                                            type="text"
                                            id="floatingInputChecked"
                                            floatingClassName="mb-3"
                                            floatingLabel="Category name *"
                                            placeholder="Category name "
                                            value={item.name}
                                            onChange={(e) => handleCategoryInput('name', e.target.value, index, 'checked')}
                                        />
                                    </Col>

                                    <Col>
                                        <CFormSelect
                                            aria-label="Default select example"
                                            className='form-control mb-3'
                                            value={item.parentId}
                                            onChange={(e) => handleCategoryInput('parentId', e.target.value, index, 'checked')}
                                        >
                                            <option>Select Category </option>
                                            {
                                                createCategoryList(category.categories).map(option =>
                                                    <option key={option.value} value={option.value}>{option.name}</option>)
                                            }
                                        </CFormSelect>
                                    </Col>
                                </Row>
                            )
                        }
                        <Button variant="primary" onClick={updateCategoriesForm}
                            className="px-4 btn d-flex align-items-center justify-content-center text-white w-100 rounded-1"
                            style={{ height: '3rem', backgroundColor: '#8624DB' }}
                        >
                            Update Category
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateCategoryModal