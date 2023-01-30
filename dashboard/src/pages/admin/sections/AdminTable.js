import React from 'react'
import { Button, Card, Col, Row, Form, InputGroup } from 'react-bootstrap'

const AdminTable = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Row className="justify-content-end" >
                        <Col xs={4} sm={4} md={4}>
                            <InputGroup className="my-3 gap-2">
                                <Form.Control
                                    placeholder="Search Here"
                                    aria-label="Search Here"
                                    aria-describedby="basic-addon2"
                                />
                                <Button
                                    style={{ backgroundColor: '#8624DB', outline:'#8624DB'}}
                                >
                                    Search
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default AdminTable