import { Button } from 'react-bootstrap'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React,{useState} from 'react'
import AddPageModal from '../modal/AddPageModal'

const PageMain = () => {


    const [openPageModal, setOpenPageModal] = useState(false)
    const handleAddModal = () => {
        setOpenPageModal(true)
    }


    return (
        <>
            <CCard>
                <CCardBody>
                    <CRow className="justify-content-end" xs={{ cols: 1 }} sm={{ cols: 1 }} md={{ cols: 2 }}>
                        <CCol>
                            <div className="d-inline-flex w-100 justify-content-end align-items-center mb-1 gap-3">
                                <Button
                                    type="button"
                                    className="btn btn-outline-success d-flex align-items-center text-white bg-success"
                                    style={{ height: '3rem' }}
                                    onClick={handleAddModal}
                                >
                                    Add Page
                                </Button>
                            </div>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
            <AddPageModal visibility={{ show: openPageModal, setShow: setOpenPageModal }} />
        </>
    )
}

export default PageMain