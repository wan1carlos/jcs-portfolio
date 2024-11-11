import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ scrolled }) => scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  padding: 1rem 0;
  z-index: 1000;
  transition: ${props => props.theme.transitions.default};
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  img {
    height: 50px; // Adjust this value based on your logo size
    width: auto;
    transition: ${props => props.theme.transitions.default};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.98);
  padding: 2rem;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MobileNavLink = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  background: none;
  border: none;
  cursor: pointer;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo to="/">
          <img src="/images/logo.png" alt="JCS Logo" />
        </Logo>
        <NavLinks>
          <NavLink onClick={() => handleNavClick('home')}>Home</NavLink>
          <NavLink onClick={() => handleNavClick('about')}>About</NavLink>
          <NavLink onClick={() => handleNavClick('education')}>Education</NavLink>
          <NavLink onClick={() => handleNavClick('skills')}>Skills</NavLink>
          <NavLink onClick={() => handleNavClick('portfolio')}>Portfolio</NavLink>
          <NavLink onClick={() => handleNavClick('contact')}>Contact</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          ☰
        </MobileMenuButton>
      </NavContainer>

      <MobileMenu isOpen={mobileMenuOpen}>
        <CloseButton onClick={() => setMobileMenuOpen(false)}>×</CloseButton>
        <MobileNavLinks>
          <MobileNavLink onClick={() => handleNavClick('home')}>Home</MobileNavLink>
          <MobileNavLink onClick={() => handleNavClick('about')}>About</MobileNavLink>
          <MobileNavLink onClick={() => handleNavClick('education')}>Education</MobileNavLink>
          <MobileNavLink onClick={() => handleNavClick('skills')}>Skills</MobileNavLink>
          <MobileNavLink onClick={() => handleNavClick('portfolio')}>Portfolio</MobileNavLink>
          <MobileNavLink onClick={() => handleNavClick('contact')}>Contact</MobileNavLink>
        </MobileNavLinks>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;