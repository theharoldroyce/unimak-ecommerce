import React, { useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBadge,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';

const HeaderSection = () => {

    const [showBasic, setShowBasic] = useState(false);

    return (
        <>
            <MDBNavbar sticky expand='lg' light bgColor='white' style={{ height: '60px' }} className="mb-3" >
                <MDBContainer fluid className='bg-white m-0 m-md-5'>
                    <NavLink to="/" element={NavLink}>
                        <MDBNavbarBrand className="ml-3">
                            Unimak Builders Supply
                        </MDBNavbarBrand>
                    </NavLink>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}  >
                        <MDBNavbarNav className='justify-content-center mb-2 mb-lg-0 gap-1 gap-lg-4'>
                            <MDBNavbarItem>
                                <NavLink to="/" element={NavLink}>
                                    <MDBNavbarLink >
                                        Home
                                    </MDBNavbarLink>
                                </NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink to="shop" element={NavLink}>
                                    <MDBNavbarLink >
                                        Shop
                                    </MDBNavbarLink>
                                </NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink to="services" element={NavLink}>
                                    <MDBNavbarLink >
                                        Services
                                    </MDBNavbarLink>
                                </NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink to="about" element={NavLink}>
                                    <MDBNavbarLink  >
                                        About us
                                    </MDBNavbarLink>
                                </NavLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <NavLink to="contact" element={NavLink}>
                                    <MDBNavbarLink>
                                        Contact us
                                    </MDBNavbarLink>
                                </NavLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <div className='d-block d-sm-block d-md-block d-lg-none mb-2 mb-lg-0'>
                            <MDBNavbarNav className='gap-3 mb-2 ' >
                                <MDBNavbarItem>
                                    <NavLink to="" element={NavLink}></NavLink>
                                    <MDBNavbarLink>
                                        <MDBBadge pill color='danger'></MDBBadge>
                                        <span>
                                            <MDBIcon fas icon='shopping-cart'></MDBIcon>
                                        </span>
                                    </MDBNavbarLink>

                                </MDBNavbarItem>
                                <NavLink to="login" element={NavLink}>
                                    <MDBBtn color="dark">Login</MDBBtn>
                                </NavLink>
                                <NavLink to="signup" element={NavLink}>
                                    <MDBBtn color="secondary">Sign up</MDBBtn>
                                </NavLink>
                            </MDBNavbarNav>

                        </div>

                    </MDBCollapse>
                    <div className='d-none d-lg-block mb-2 mb-lg-0'>
                        <MDBNavbarNav className='gap-3' >
                            <MDBNavbarItem>
                                <NavLink to="" element={NavLink}>
                                    <MDBNavbarLink>
                                        <MDBBadge pill color='danger'></MDBBadge>
                                        <span>
                                            <MDBIcon fas icon='shopping-cart'></MDBIcon>
                                        </span>
                                    </MDBNavbarLink>
                                </NavLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
                                <MDBDropdown>

                                    <MDBDropdownToggle tag="a" className="hidden-arrow nav-link">
                                        <img src='' className="rounded-circle" height="22" alt="" loading="lazy" />
                                    </MDBDropdownToggle>

                                    <MDBDropdownMenu >
                                        <NavLink to="" element={NavLink}>
                                            <MDBDropdownItem link childTag='button' >
                                                Logout
                                            </MDBDropdownItem>
                                        </NavLink>
                                        <NavLink to="login" element={NavLink}>
                                            <MDBDropdownItem link childTag='button' >
                                                Login
                                            </MDBDropdownItem>
                                        </NavLink>
                                        <NavLink to="sigin" element={NavLink}>
                                            <MDBDropdownItem link childTag='button'>
                                                Signin
                                            </MDBDropdownItem>
                                        </NavLink>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}

export default HeaderSection