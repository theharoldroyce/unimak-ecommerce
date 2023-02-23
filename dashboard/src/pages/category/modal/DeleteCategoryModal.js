import React, { useState } from 'react'
import { Button, Col, Row, Form, Modal } from 'react-bootstrap'
import { CFormInput, CFormSelect } from '@coreui/react';

const DeleteCategoryModal = (props) => {

    const [openDeleteCategory, setOpenDeleteCategory] = useState(false)

    const {
        show,
        onHide,
        size,
        centered,
        expandedArray,
        checkedArray,
        deleteCategories,
    } = props


    return (
        <>
            <Modal
                show={openDeleteCategory}
                onHide={() => setOpenDeleteCategory(false)}
                size="md"
                centered={true}
            >
                <Modal.Header className="justify-content-center" closeButton>
                    <Modal.Title className='fs-5'>
                        Delete Category ?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Expanded</h4>
                    {expandedArray.map((item, index) => <span key={index}>{item.name}</span>)}
                    <h4>Checked</h4>
                    {checkedArray.map((item, index) => <span key={index}>{item.name}</span>)}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="button"
                        className="btn btn-outline-warning d-flex align-items-center text-white bg-warning"
                        style={{ height: '3rem' }}
                        onClick={() => setOpenDeleteCategory(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="button"
                        className="btn btn-outline-danger d-flex align-items-center text-white bg-danger"
                        style={{ height: '3rem' }}
                        onClick={deleteCategories}
                    >
                        Delete
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteCategoryModal