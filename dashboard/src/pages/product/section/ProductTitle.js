import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import ProductModal from '../modal/ProductModal'

const ProductTitle = () => {

    const [openCategoryModal, setOpenCategoryModal] = useState(false)
    const handleModal = () => {
        setOpenCategoryModal(true)
    }

  return (
    <>
      <Row className="mb-3" xs={{ cols: 1 }} sm={{ cols: 1 }} md={{ cols: 2 }}>
                <Col xs={8} sm={8} md={8}>
                    <div className="d-inline-flex justify-content-md-start justify-content-between align-items-center mb-1">
                        <h4>Products</h4>
                    </div>
                </Col>
                <Col xs={4} sm={4} md={4}>
                    <div className="d-inline-flex w-100 justify-content-end align-items-center mb-1">
                        <Button
                            type="button"
                            className="d-flex align-items-center text-white"
                            style={{ height: '3rem', backgroundColor: '#8624DB' }}
                            onClick={handleModal}
                        >
                            Add new Product
                        </Button>
                    </div>
                </Col>
            </Row>
            <ProductModal visibility={{ show: openCategoryModal, setShow: setOpenCategoryModal }} />
    </>
  )
}

export default ProductTitle