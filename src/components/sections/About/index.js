import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.gray.light} 0%,
    white 100%
  );
  position: relative;
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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(42, 157, 143, 0.15);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(42, 157, 143, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: ${props => props.theme.colors.accent};
      margin: 1rem 0;
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.accent};
    background: linear-gradient(
      135deg,
      ${props => props.theme.colors.accent},
      ${props => props.theme.colors.accent2}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.gray.dark};
    line-height: 1.8;
    font-size: 1.1rem;
  }

  blockquote {
    font-style: italic;
    padding: 1.5rem;
    border-left: 4px solid ${props => props.theme.colors.accent};
    margin: 2rem 0;
    color: ${props => props.theme.colors.gray.dark};
    background: white;
    border-radius: 0 8px 8px 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    position: relative;
    
    &::before {
      content: '"';
      position: absolute;
      top: 0;
      left: -2rem;
      font-size: 4rem;
      color: ${props => props.theme.colors.accent};
      opacity: 0.2;
    }
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.accent},
    ${props => props.theme.colors.accent2}
  );
  color: white;
  border-radius: 50px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(42, 157, 143, 0.2);
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

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <ImageContainer>
          <img src="/images/jcs.jpg" alt="James Clifford A. Sison" />
        </ImageContainer>
        <Content>
          <h2>About Me</h2>
          <h3>JAMES CLIFFORD A. SISON</h3>
          <p>
            I am an Architecture Graduate at Technological Institute of the Philippines
            in Manila with a strong foundation in design principles and project
            management. Skilled in 3D modelling, drafting, and sustainable design
            practices.
          </p>
          <p>
            Possesses a dedication to consistently finding solutions through the
            application of architecture. With a basic knowledge in Architectural
            software such as: AutoCAD, Sketch Up, Lumion, Revit, and Adobe
            Photoshop. Eager to leverage my skills and continue to learn in the field of
            Architecture that will contribute to my team and give positive results.
          </p>
          <blockquote>
            "Imagination is not about imagining what the impact will be; rather, it is 
            about imagining what the effect will cause in the future."
          </blockquote>
          <DownloadButton href="/resume.pdf" target="_blank">
            Download Resume
          </DownloadButton>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;