import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'


const Page404 = () => {
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center text-center">
            <Container>

                <div className="clearfix">
                    <h1 className="display-3 me-4">404</h1>
                    <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
                    <p className="text-medium-emphasis">
                        The page you are looking for was not found.
                    </p>
                    <NavLink to="/" element={NavLink}>
                        <Button>
                            Go Back
                        </Button>
                    </NavLink>
                </div>

            </Container>
        </div>
    )
}

export default Page404