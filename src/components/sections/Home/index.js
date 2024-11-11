import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(42, 157, 143, 0.7) 100%
  ),
  url('/images/skyline-bg.jpg') center/cover no-repeat fixed;
  color: ${props => props.theme.colors.secondary};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.accent},
      ${props => props.theme.colors.accent2}
    );
  }
`;

const HomeContent = styled.div`
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.secondary} 0%,
    ${props => props.theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: ${props => props.primary ? 
    `linear-gradient(135deg, ${props.theme.colors.accent}, ${props.theme.colors.accent2})` : 
    'transparent'
  };
  color: ${props => props.theme.colors.secondary};
  border-radius: 50px;
  font-weight: 500;
  border: ${props => props.primary ? 'none' : `2px solid ${props.theme.colors.secondary}`};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    background: ${props => props.primary ? 
      `linear-gradient(135deg, ${props.theme.colors.accent2}, ${props.theme.colors.accent})` : 
      `rgba(255, 255, 255, 0.1)`
    };
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: 0.5s;
  }

  &:hover::after {
    transform: translateX(100%);
  }
`;

const Accent = styled.span`
  color: ${props => props.theme.colors.accent};
  font-weight: 700;
`;

const Home = () => {
  return (
    <HomeSection id="home">
      <HomeContent>
        <Title>Creating Spaces That Inspire</Title>
        <Tagline>
          Transforming visions into <Accent>architectural masterpieces</Accent> through innovative design
          and sustainable solutions.
        </Tagline>
        <ButtonContainer>
          <CTAButton href="#about" primary>Learn More</CTAButton>
          <CTAButton href="#portfolio">View Portfolio</CTAButton>
        </ButtonContainer>
      </HomeContent>
    </HomeSection>
  );
};

export default Home; 