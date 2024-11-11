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

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 3rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.accent};
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${props => props.theme.colors.accent};
      border-radius: 2px;
    }
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  animation: ${fadeIn} 1s ease-out;

  &.single-item {
    grid-template-columns: 1fr;
    
    ${props => props.theme.breakpoints.tablet} {
      grid-template-columns: 1fr;
    }
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 50%;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      ${props => props.theme.colors.accent},
      ${props => props.theme.colors.accent2}
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${SkillItem}:hover & {
    transform: scale(1.1);
    
    &::after {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SkillName = styled.h4`
  margin: 0.5rem 0;
  font-weight: 500;
  text-align: center;
  font-size: 0.9rem;
`;

const SkillLevel = styled.div`
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  background: ${props => props.level === 'Advanced' ? 
    `linear-gradient(135deg, ${props.theme.colors.accent}, ${props.theme.colors.accent2})` :
    props.theme.colors.gray.light
  };
  color: ${props => props.level === 'Advanced' ? 'white' : props.theme.colors.gray.medium};
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'CADD SOFTWARE',
      skills: [
        { name: 'SketchUp', level: 'Advanced', icon: '/images/icons/sketchup.png' },
        { name: 'AutoCAD', level: 'Advanced', icon: '/images/icons/autocad.png' },
        { name: 'Revit', level: 'Basic', icon: '/images/icons/revit.png' },
      ]
    },
    {
      title: 'RENDER SOFTWARE',
      skills: [
        { name: 'Photoshop', level: 'Basic', icon: '/images/icons/photoshop.png' },
        { name: 'Lumion', level: 'Advanced', icon: '/images/icons/lumion.png' },
        { name: 'V-Ray', level: 'Basic', icon: '/images/icons/vray.png' },
      ]
    },
    {
      title: 'VIDEO SOFTWARE',
      skills: [
        { name: 'Filmora', level: 'Basic', icon: '/images/icons/filmora.png' },
      ]
    },
    {
      title: 'DOCUMENTATION SOFTWARE',
      skills: [
        { name: 'MS Word', level: 'Advanced', icon: '/images/icons/word.png' },
        { name: 'MS Excel', level: 'Basic', icon: '/images/icons/excel.png' },
        { name: 'MS PowerPoint', level: 'Basic', icon: '/images/icons/powerpoint.png' },
      ]
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index}>
              <h3>{category.title}</h3>
              <SkillsContainer className={category.skills.length === 1 ? 'single-item' : ''}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <IconWrapper>
                      <img src={skill.icon} alt={skill.name} />
                    </IconWrapper>
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel level={skill.level}>{skill.level}</SkillLevel>
                  </SkillItem>
                ))}
              </SkillsContainer>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 