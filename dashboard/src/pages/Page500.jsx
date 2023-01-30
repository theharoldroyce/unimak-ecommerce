import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Page500 = () => {
    return (
        <>
            <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <span className="clearfix">
                                <h1 className="float-start display-2 me-4">500</h1>
                                <h4 className="pt-3">Sorry, we have a problem!</h4>
                                <p className="text-medium-emphasis float-start">
                                    The page you are looking for is temporarily unavailable.
                                </p>
                            </span>
                            <Button>
                                Go Back
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Page500