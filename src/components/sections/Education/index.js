import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const EducationSection = styled.section`
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
  position: relative;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: ${props => props.theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: ${props => props.theme.colors.accent};
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SubSection = styled.div`
  h3 {
    color: ${props => props.theme.colors.accent};
    margin-bottom: 2rem;
    font-size: 1.8rem;
    display: inline-block;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        ${props => props.theme.colors.accent},
        transparent
      );
    }
  }
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -1px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${props => props.theme.colors.accent},
      ${props => props.theme.colors.accent2}
    );
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 2rem 0 2rem 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  &::before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 2.5rem;
    width: 1rem;
    height: 1rem;
    background: ${props => props.theme.colors.accent};
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.2);
  }

  &:hover::before {
    background: ${props => props.theme.colors.accent2};
    box-shadow: 0 0 0 5px rgba(231, 111, 81, 0.2);
  }
`;

const Year = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.accent};
  font-size: 1.1rem;
  display: inline-block;
  padding: 0.25rem 1rem;
  background: rgba(42, 157, 143, 0.1);
  border-radius: 20px;
  margin-bottom: 0.5rem;
`;

const Degree = styled.h3`
  margin: 0.5rem 0;
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  ${TimelineItem}:hover & {
    color: ${props => props.theme.colors.accent};
  }
`;

const Institution = styled.p`
  color: ${props => props.theme.colors.gray.medium};
  font-size: 0.95rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '🏛️';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <Container>
        <SectionTitle>Education & Experience</SectionTitle>
        <ContentWrapper>
          <SubSection>
            <h3>Education</h3>
            <Timeline>
              <TimelineItem>
                <Year>2018 - 2024</Year>
                <Degree>Bachelor of Science in Architecture</Degree>
                <Institution>Technological Institute of the Philippines - Manila</Institution>
              </TimelineItem>
              <TimelineItem>
                <Year>2016 - 2018</Year>
                <Degree>Senior High School - STEM Strand</Degree>
                <Institution>Our Lady of Fatima University - Valenzuela</Institution>
              </TimelineItem>
              <TimelineItem>
                <Year>2013 - 2016</Year>
                <Degree>Junior High School</Degree>
                <Institution>Manuel L. Quezon High School - Blumentrit, Metro Manila</Institution>
              </TimelineItem>
              <TimelineItem>
                <Year>2006 - 2012</Year>
                <Degree>Primary School</Degree>
                <Institution>Doña Ata Elementary School - Valenzuela</Institution>
              </TimelineItem>
            </Timeline>
          </SubSection>

          <SubSection>
            <h3>Experience & Certifications</h3>
            <Timeline>
              <TimelineItem>
                <Year>2022</Year>
                <Degree>Architecture Intern</Degree>
                <Institution>Jarima Konstrak Corporation</Institution>
              </TimelineItem>
              <TimelineItem>
                <Year>2021</Year>
                <Degree>UASPA - T.I.P Manila Workshop</Degree>
                <Institution>Limitless Transforming Vision into Reality</Institution>
              </TimelineItem>
              <TimelineItem>
                <Year>2020</Year>
                <Degree>The Products of Technological Advancement in Architecture</Degree>
                <Institution>A Tutorial in AutoCAD, Photoshop and SketchUp</Institution>
              </TimelineItem>
              <TimelineItem>
                <Year>2019</Year>
                <Degree>Advance AutoCAD</Degree>
                <Institution>Struct, Mech, Tech, Plum and Fire - MicroCADD Cubao</Institution>
              </TimelineItem>
              <TimelineItem>
                <Year>2018</Year>
                <Degree>AutoCAD 2D, 3D, Color Rendering and Plotting</Degree>
                <Institution>MicroCADD Monumento</Institution>
              </TimelineItem>
            </Timeline>
          </SubSection>
        </ContentWrapper>
      </Container>
    </EducationSection>
  );
};

export default Education; 