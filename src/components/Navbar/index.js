import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
// import {IconScroll as scroll} from 'react-icons/lib';
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            PUBLIC ADMINISTRATION
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="chairman"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active"
              >
                Chairman
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="former"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active"
              >
                Former Chairman
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services "
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="notice"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active"
              >
                Notice
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass="active"
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink
              to="signin"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClass="active"
            >
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
