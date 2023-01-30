import React,{ useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import AddAdminModal from '../modal/AddAdminModal'

const Title = () => {

    const [openModal, setOpenModal] = useState(false)
    const handleModal = () => {
        setOpenModal(true)
    }

    return (
        <>
            <Row className="mb-3" xs={{ cols: 1 }} sm={{ cols: 1 }} md={{ cols: 2 }}>
                <Col xs={8} sm={8} md={8}>
                    <div className="d-inline-flex justify-content-md-start justify-content-between align-items-center mb-1">
                        <h4>Admin Accounts</h4>
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
                            Add New Admin
                        </Button>
                    </div>
                </Col>
            </Row>
            <AddAdminModal visibility={{ show: openModal, setShow: setOpenModal }} />
        </>
    )
}

export default Title