import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectsPage = styled.div`
  padding: 8rem 0 6rem;
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

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
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
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CategoryTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${props => props.theme.colors.gray.light};
  color: ${props => props.theme.colors.accent};
  border-radius: 20px;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`;

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: 'RIBAY: A Proposed Two-Storey Split-Type Residential',
      description: 'During a 2022 architectural internship, the project involved designing a cohesive two-story split-type residence in Antipolo that avoids appearing as two separate houses.',
      image: '/images/project1/main.png',
      category: 'Residential'
    },
    {
      id: 2,
      title: 'AGRIESTO: A Proposed Agricultural and Resto-Farm in Tagaytay City',
      description: 'Agriesto was accomplished during my architectural internship in 2022. It combines a restaurant and a farm, located on Crisanto M. Reyes Avenue in Kaybagal North, Tagaytay, spanning approximately 11,502.5 square meters.',
      image: '/images/project2/main.png',
      category: 'Commercial'
    },
    {
      id: 3,
      title: 'DADIA: A Proposed Two-Storey Residential',
      description: 'The DADIA project, completed during my architectural internship in 2022, involved creating detailed perspectives of a two-story residential building.',
      image: '/images/project3/main.png',
      category: 'Residential'
    },
    {
      id: 4,
      title: 'A Proposed Two-Storey Residential',
      description: 'The project was a commission for a friend. The task involved designing a two-storey residential located in Caloocan. The objective was to create a modern two-storey residential architecture application.',
      image: '/images/project4/main.png',
      category: 'Residential'
    },
    {
      id: 5,
      title: 'INTERIOR DESIGN: One Storey Residential',
      description: 'The requirement for this project is to design a "One-Storey Residence that based on B.P 957 and that should apply the setbacks. The project\'s residential interiors were enhanced through 3D modeling and rendering techniques.',
      image: '/images/project5/main.png',
      category: 'Interior Design'
    },
    {
      id: 6,
      title: 'INTERIOR DESIGN: BATHROOM',
      description: 'Lumion Render was used for the Interior Bathroom Design competition hosted at Technological Institute of the Philippines in Quezon City.',
      image: '/images/project6/main.png',
      category: 'Interior Design'
    },
    {
      id: 7,
      title: 'INTERIOR DESIGN: OFFICES - PAGLAUM',
      description: 'A Proposed Veterans and Amputees Rehabilitation Complex for the Armed Forces of the Philippines, aims to design a comprehensive rehabilitation center to aid soldiers injured in combat or encounters with terrorist and rebel groups.',
      image: '/images/project7/main.png',
      category: 'Healthcare'
    },
    {
      id: 8,
      title: 'UNDERGRADUATE CAPSTONE: USCM Arena',
      description: 'A Proposed Urban Sport Complex and Multi-Purpose Arena located in Balanga City, Bataan. A state-of-the-art facility providing top-tier training for national athletes and hosting large-scale events.',
      image: '/images/project8/main.png',
      category: 'Sports Complex'
    }
  ];

  return (
    <ProjectsPage>
      <Container>
        <PageTitle>All Projects</PageTitle>
        <ProjectGrid>
          {allProjects.map(project => (
            <ProjectCard key={project.id} to={`/project/${project.id}`}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectInfo>
                <CategoryTag>{project.category}</CategoryTag>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </ProjectsPage>
  );
};

export default Projects; 