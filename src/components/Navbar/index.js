import React from 'react';
import {FaBars} from 'react-icons/fa';


import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
    } from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to = '/'>
                        Public Administration
                    </NavLogo>
                    <MobileIcon onClick ={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks className="active" to = '/chairman'>Chairman</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = '/former'>Former Chairman</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = '/gallery'>Gallery</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = '/notice'>Notice</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = '/signIn'> Sign In</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                            <NavBtnLink to = '/signUp'>
                                 Sign Up
                            </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
