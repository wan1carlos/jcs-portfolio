import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  padding: 3rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Column = styled.div`
  h3 {
    margin-bottom: 1rem;
  }
`;

const QuickLink = styled.span`
  cursor: pointer;
  display: block;
  margin-bottom: 0.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const CreditLink = styled.a`
  color: ${props => props.theme.colors.accent};
  &:hover {
    color: ${props => props.theme.colors.accent2};
  }
`;

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (sectionId) => {
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
    <FooterWrapper>
      <Container>
        <Column>
          <h3>J.C.S</h3>
          <p>Creating spaces that inspire and endure.</p>
        </Column>
        <Column>
          <h3>Quick Links</h3>
          <QuickLink onClick={() => handleNavClick('home')}>Home</QuickLink>
          <QuickLink onClick={() => handleNavClick('about')}>About</QuickLink>
          <QuickLink onClick={() => handleNavClick('portfolio')}>Portfolio</QuickLink>
          <QuickLink onClick={() => handleNavClick('contact')}>Contact</QuickLink>
        </Column>
        <Column>
          <h3>Connect</h3>
          <p>Email: cliffordsison26@gmail.com</p>
          <p>Phone: (+63) 928-638-7209</p>
          <SocialLinks>
            <SocialLink 
              href="https://www.linkedin.com/in/archjcliffordsison/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </SocialLink>
          </SocialLinks>
        </Column>
      </Container>
      <Copyright>
        <p>
          &copy; 2024 J.C.S All rights reserved. Website made by{' '}
          <CreditLink 
            href="https://jcfrancisco.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Jc Francisco
          </CreditLink>
        </p>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;