import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PortfolioSection = styled.section`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(Link)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(42, 157, 143, 0.15);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.accent},
      ${props => props.theme.colors.accent2}
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  padding-top: 66.67%;
  overflow: hidden;

  &::before {
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
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ProjectCard}:hover &::before {
    opacity: 1;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover img {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  background: white;
  position: relative;

  h3 {
    margin-bottom: 0.8rem;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.primary};
    transition: color 0.3s ease;

    ${ProjectCard}:hover & {
      color: ${props => props.theme.colors.accent};
    }
  }

  p {
    color: ${props => props.theme.colors.gray.medium};
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const ViewAllButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 2rem auto 0;
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
    padding: 1.2rem;
  }
`;

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'RIBAY: A Proposed Two-Storey Split-Type Residential',
      description: 'During a 2022 architectural internship, the project involved designing a cohesive two-story split-type residence in Antipolo that avoids appearing as two separate houses.',
      image: '/images/project1/main.png',
    },
    {
      id: 2,
      title: 'AGRIESTO: A Proposed Agricultural and Resto-Farm in Tagaytay City',
      description: 'Agriesto was accomplished during my architectural internship in 2022. It combines a restaurant and a farm, located on Crisanto M. Reyes Avenue in Kaybagal North, Tagaytay, spanning approximately 11,502.5 square meters.',
      image: '/images/project2/main.png',
    },
    {
      id: 3,
      title: 'DADIA: A Proposed Two-Storey Residential',
      description: 'The DADIA project, completed during my architectural internship in 2022, involved creating detailed perspectives of a two-story residential building.',
      image: '/images/project3/main.png',
    },
  ];

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid>
          {projects.map(project => (
            <ProjectCard key={project.id} to={`/project/${project.id}`}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectInfo>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
        <ViewAllButton to="/projects">View All Projects</ViewAllButton>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;