import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectDetailPage = styled.div`
  padding: 8rem 0 6rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.gray.medium};
  margin-bottom: 2rem;
  font-weight: 500;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const ProjectInfo = styled.div`
  margin-bottom: 4rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.gray.dark};
  margin-bottom: 2rem;
`;

const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DetailItem = styled.div`
  h3 {
    color: ${props => props.theme.colors.accent};
    margin-bottom: 0.5rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 66.67%;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const RequirementsList = styled.div`
  margin: 2rem 0;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${props => props.theme.colors.gray.medium};
    margin-bottom: 1.5rem;
  }
`;

const FloorRequirements = styled.div`
  margin-bottom: 2rem;

  h4 {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    border-bottom: 2px solid ${props => props.theme.colors.accent};
    padding-bottom: 0.5rem;
    display: inline-block;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      color: ${props => props.theme.colors.accent};
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -2rem;
  right: -2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }

  ${props => props.direction === 'prev' ? 'left: 1rem;' : 'right: 1rem;'}

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.5rem;
    font-size: 1.5rem;
    ${props => props.direction === 'prev' ? 'left: 0;' : 'right: 0;'}
  }
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.gray.medium};
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

const BuildingSection = styled.div`
  margin: 4rem 0;
`;

const BuildingCategory = styled.h3`
  color: ${props => props.theme.colors.accent};
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const BuildingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BuildingCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BuildingImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
`;

const BuildingImageWrapper = styled.div`
  position: relative;
  padding-top: 66.67%;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const BuildingInfo = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${props => props.theme.colors.gray.light};

  h4 {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.primary};
  }
`;

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(null);

  const projectsData = {
    1: {
      title: 'RIBAY: A Proposed Two-Storey Split-Type Residential',
      description: 'During a 2022 architectural internship, the project involved designing a cohesive two-story split-type residence in Antipolo that avoids appearing as two separate houses.',
      location: 'Antipolo City',
      year: '2022',
      type: 'Residential',
      client: 'Jarima Konstrak Corporation',
      role: 'Architectural Intern',
      requirements: {
        firstFloor: [
          'Two Car Carport',
          'Porch',
          'Living Area',
          'Service Area',
          'Dining and Kitchen Area'
        ],
        secondFloor: [
          '1 Bedroom',
          'Master\'s Bedroom with Toilet and Bath'
        ]
      },
      details: [
        'Developed comprehensive architectural plans and elevations',
        'Created detailed 3D visualizations using SketchUp and Lumion',
        'Collaborated with senior architects on design refinements',
        'Incorporated sustainable design principles'
      ],
      images: [
        '/images/project1/main.png',
        '/images/project1/img2.png',
        '/images/project1/img3.png',
        '/images/project1/img4.png',
      ]
    },
    2: {
      title: 'AGRIESTO: A Proposed Agricultural and Resto-Farm in Tagaytay City',
      description: 'Agriesto was accomplished during my architectural internship in 2022. It combines a restaurant and a farm, located on Crisanto M. Reyes Avenue in Kaybagal North, Tagaytay, spanning approximately 11,502.5 square meters.',
      location: 'Kaybagal North, Tagaytay City',
      year: '2022',
      type: 'Commercial & Agricultural',
      client: 'Jarima Konstrak Corporation',
      role: 'Architectural Intern',
      requirements: {
        facilities: [
          'Parking',
          'Lobby and Reception Area',
          'Kitchen Staff and Storage Room',
          'Service and Kitchen Area',
          'Indoor Dining Area',
          'Outdoor Dining Area',
          'Vegetation'
        ]
      },
      details: [
        'Developed comprehensive architectural plans and elevations',
        'Created detailed 3D visualizations using SketchUp and Lumion',
        'Collaborated with senior architects on design refinements',
        'Incorporated sustainable agricultural principles',
        'Integrated restaurant operations with farm aesthetics'
      ],
      images: [
        '/images/project2/main.png',
        '/images/project2/img2.png',
        '/images/project2/img3.png',
        '/images/project2/img4.png',
      ]
    },
    3: {
      title: 'DADIA: A Proposed Two-Storey Residential',
      description: 'The DADIA project, completed during my architectural internship in 2022, involved creating detailed perspectives of a two-story residential building. My responsibilities included producing a walkthrough to highlight the interior and exterior views for the clients.',
      location: 'Metro Manila',
      year: '2022',
      type: 'Residential',
      client: 'Jarima Konstrak Corporation',
      role: 'Architectural Intern',
      requirements: {
        firstFloor: [
          'One Car Carport',
          '2 Toilet and Bath',
          'Living Area',
          'Dining and Kitchen Area',
          'Maid\'s Qtr., Kitchen'
        ],
        secondFloor: [
          '2 Bedroom',
          'Master\'s Bedroom with Toilet and Bath'
        ]
      },
      details: [
        'Developed comprehensive architectural plans and elevations',
        'Created detailed 3D visualizations using SketchUp and Lumion',
        'Produced walkthrough animations for client presentations',
        'Designed interior and exterior perspectives',
        'Collaborated with senior architects on design refinements'
      ],
      images: [
        '/images/project3/main.png',
        '/images/project3/img2.png',
      ]
    },
    4: {
      title: 'A Proposed Two-Storey Residential',
      description: 'The project was a commission for a friend. The task involved designing a two-storey residential located in Caloocan. The objective was to create a modern two-storey residential architecture application.',
      location: 'Caloocan City',
      year: '2023',
      type: 'Residential',
      client: 'Private Client',
      role: 'Architect',
      requirements: {
        firstFloor: [
          'One Car Carport',
          'Porch',
          'Foyer',
          'Living Area',
          'Dining and Kitchen Area',
          'Dirty Kitchen',
          'Storage',
          'Toilet and Bath',
          'Bedroom 1'
        ],
        secondFloor: [
          'Bedroom 2',
          'Bedroom 3',
          'Master\'s Bedroom with Toilet and Bath',
          'Family Room with Toilet and Bath and Balcony'
        ]
      },
      details: [
        'Developed comprehensive architectural plans and elevations',
        'Created detailed 3D visualizations using SketchUp and Lumion',
        'Designed modern residential spaces that meet client requirements',
        'Incorporated contemporary design elements',
        'Optimized space utilization for family living'
      ],
      images: [
        '/images/project4/main.png',
        '/images/project4/img2.png',
        '/images/project4/img3.png',
        '/images/project4/img4.png',
      ]
    },
    5: {
      title: 'INTERIOR DESIGN: One Storey Residential',
      description: 'The requirement for this project is to design a "One-Storey Residence that based on B.P 957 and that should apply the setbacks. The project\'s residential interiors were enhanced through the application of 3D modeling and Lumion, Adobe Photoshop rendering techniques, bringing depth and realism to their design.',
      location: 'Metro Manila',
      year: '2023',
      type: 'Interior Design',
      client: 'Academic Project',
      role: 'Interior Designer',
      requirements: {
        facilities: [
          'Living Area',
          'Dining Area',
          'Kitchen',
          'Master\'s Bedroom',
          'Bedrooms',
          'Bathrooms',
          'Service Area',
          'Carport'
        ]
      },
      details: [
        'Developed interior design concepts following B.P 957 guidelines',
        'Created detailed 3D visualizations using SketchUp and Lumion',
        'Applied advanced rendering techniques in Adobe Photoshop',
        'Implemented proper setback requirements',
        'Designed functional and aesthetically pleasing interior spaces'
      ],
      images: [
        '/images/project5/main.png',
        '/images/project5/img2.png',
        '/images/project5/img3.png',
        '/images/project5/img4.png',
      ]
    },
    6: {
      title: 'INTERIOR DESIGN: BATHROOM',
      description: 'Lumion Render was used for the Interior Bathroom Design competition hosted at Technological Institute of the Philippines in Quezon City.',
      location: 'Quezon City',
      year: '2023',
      type: 'Interior Design',
      client: 'Competition Entry',
      role: 'Interior Designer',
      requirements: {
        facilities: [
          'Modern Bathroom Design',
          'Contemporary Fixtures',
          'Ambient Lighting',
          'Storage Solutions',
          'Aesthetic Appeal'
        ]
      },
      details: [
        'Created photorealistic 3D visualizations using Lumion',
        'Developed innovative bathroom design concepts',
        'Incorporated modern design elements and fixtures',
        'Optimized space utilization and functionality',
        'Focused on creating a luxurious yet practical space'
      ],
      images: [
        '/images/project6/main.png',
        '/images/project6/img2.png',
      ]
    },
    7: {
      title: 'INTERIOR DESIGN: OFFICES - PAGLAUM',
      description: 'PAGLAUM: A Proposed Veterans and Amputees Rehabilitation Complex for the Armed Forces of the Philippines, aims to design a comprehensive rehabilitation center to aid soldiers injured in combat or encounters with terrorist and rebel groups. This project provides support for their physical and mental health. The project\'s office interiors were enhanced through the application of 3D modeling and Lumion rendering techniques, bringing depth and realism to their design.',
      location: 'Metro Manila',
      year: '2023',
      type: 'Interior Design - Healthcare',
      client: 'Academic Project',
      role: 'Interior Designer',
      requirements: {
        facilities: [
          'Administrative Offices',
          'Medical Staff Offices',
          'Consultation Rooms',
          'Meeting Spaces',
          'Reception Area',
          'Staff Lounges',
          'Record Storage',
          'Support Facilities'
        ]
      },
      details: [
        'Designed office spaces for medical and administrative staff',
        'Created a healing and supportive environment through design',
        'Developed 3D visualizations using SketchUp and Lumion',
        'Incorporated accessibility features throughout the facility',
        'Focused on creating efficient workflow patterns',
        'Integrated modern healthcare design principles'
      ],
      images: [
        '/images/project7/main.png',
        '/images/project7/img2.png',
        '/images/project7/img3.png',
        '/images/project7/img4.png',
      ]
    },
    8: {
      title: 'UNDERGRADUATE CAPSTONE: USCM Arena',
      subtitle: 'A Proposed Urban Sport Complex and Multi-Purpose Arena',
      description: 'The USCM Arena, a state-of-the-art facility in Bataan province, will provide top-tier training for national athletes and host large-scale events, promising an unforgettable experience. With its modern design and advanced technology, it will serve as a valuable asset to the local community and beyond. Designing an urban sports complex and multi-purpose arena enhances safety, accessibility, and vibrancy for both residential and commercial areas. Conveniently located near a road, easing access and mitigating traffic congestion. Site elevation of 7.6 meters (24.9 feet) reduces construction costs and simplifies planning. The project proposed provide a wellness center, recreation building and sports complex. To provide parking spaces, multi-purpose building and commercial spaces and concessionaire spaces. To provide a new development that will have an entertainment events, sports activities and training center.',
      location: 'Balanga City, Bataan',
      year: '2024',
      type: 'Sports Complex',
      client: 'Capstone Project',
      role: 'Lead Designer',
      perspectives: {
        exterior: [
          { 
            name: 'Main Entrance View', 
            images: ['/images/project8/exterior1.png', '/images/project8/exterior2.png'] 
          },
          { 
            name: 'Stadium Facade', 
            images: ['/images/project8/exterior3.png', '/images/project8/exterior4.png'] 
          },
          { 
            name: 'Complex Overview', 
            images: ['/images/project8/exterior5.png', '/images/project8/exterior6.png'] 
          },
          { 
            name: 'Night View', 
            images: ['/images/project8/exterior7.png', '/images/project8/exterior8.png'] 
          }
        ],
        interior: [
          { 
            name: 'Stadium Interior', 
            images: ['/images/project8/interior1.png', '/images/project8/interior2.png'] 
          },
          { 
            name: 'Training Facilities', 
            images: ['/images/project8/interior3.png', '/images/project8/interior4.png'] 
          }
        ],
        aerial: [
          { 
            name: 'Complex Aerial View 1', 
            images: ['/images/project8/aerial1.png', '/images/project8/aerial2.png'] 
          },
          { 
            name: 'Complex Aerial View 2', 
            images: ['/images/project8/aerial3.png', '/images/project8/aerial4.png'] 
          },
          { 
            name: 'Bird\'s Eye View', 
            images: ['/images/project8/aerial5.png'] 
          }
        ]
      },
      buildings: {
        major: [
          {
            name: 'Football Stadium',
            images: ['/images/project8/football1.png', '/images/project8/football2.png']
          },
          {
            name: 'Aquatic Center',
            images: ['/images/project8/aquatic1.png', '/images/project8/aquatic2.png']
          },
          {
            name: 'Multi-Purpose Gymnasium',
            images: ['/images/project8/gym1.png', '/images/project8/gym2.png']
          },
          {
            name: 'Training and Wellness Center',
            images: ['/images/project8/wellness1.png', '/images/project8/wellness2.png']
          }
        ]
      },
      requirements: {
        facilities: [
          'Site Development Plan',
          'Football Stadium',
          'Aquatic Center',
          'Multi-Purpose Gymnasium',
          'Training and Wellness Center',
          'Administration Building',
          'Medical and Science Building',
          'Athletes and Coaches Dormitories'
        ]
      },
      details: [
        'Developed comprehensive master plan for the sports complex',
        'Created detailed architectural plans for all buildings',
        'Integrated sustainable design principles',
        'Designed for accessibility and efficient circulation',
        'Incorporated modern sports facility standards'
      ],
      images: ['/images/project8/siteplan.png']
    }
  };

  const project = projectsData[id];

  const getAllProjectImages = (project) => {
    if (!project.buildings) return project.images;

    let allImages = [...project.images]; // Start with site plan

    // Add perspective images if they exist
    if (project.perspectives) {
      if (project.perspectives.exterior) {
        project.perspectives.exterior.forEach(view => {
          allImages = allImages.concat(view.images);
        });
      }
      if (project.perspectives.interior) {
        project.perspectives.interior.forEach(view => {
          allImages = allImages.concat(view.images);
        });
      }
      if (project.perspectives.aerial) {
        project.perspectives.aerial.forEach(view => {
          allImages = allImages.concat(view.images);
        });
      }
    }

    // Add building images
    project.buildings.major.forEach(building => {
      allImages = allImages.concat(building.images);
    });

    return allImages;
  };

  const handleImageClick = (image, index, section = null) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setCurrentSection(section);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setCurrentSection(null);
  };

  const handlePrevImage = (e) => {
    if (e) e.stopPropagation();
    if (!project) return;

    let images;
    if (project.buildings && currentSection) {
      // Handle navigation within a specific section
      switch (currentSection) {
        case 'siteplan':
          images = project.images;
          break;
        case 'exterior':
          images = project.perspectives.exterior.flatMap(view => view.images);
          break;
        case 'interior':
          images = project.perspectives.interior.flatMap(view => view.images);
          break;
        case 'aerial':
          images = project.perspectives.aerial.flatMap(view => view.images);
          break;
        case 'buildings':
          images = project.buildings.major.flatMap(building => building.images);
          break;
        default:
          images = getAllProjectImages(project);
      }
    } else {
      images = project.images;
    }

    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handleNextImage = (e) => {
    if (e) e.stopPropagation();
    if (!project) return;

    let images;
    if (project.buildings && currentSection) {
      // Handle navigation within a specific section
      switch (currentSection) {
        case 'siteplan':
          images = project.images;
          break;
        case 'exterior':
          images = project.perspectives.exterior.flatMap(view => view.images);
          break;
        case 'interior':
          images = project.perspectives.interior.flatMap(view => view.images);
          break;
        case 'aerial':
          images = project.perspectives.aerial.flatMap(view => view.images);
          break;
        case 'buildings':
          images = project.buildings.major.flatMap(building => building.images);
          break;
        default:
          images = getAllProjectImages(project);
      }
    } else {
      images = project.images;
    }

    const newIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') handleClose();
        if (e.key === 'ArrowLeft') handlePrevImage();
        if (e.key === 'ArrowRight') handleNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  if (!project) {
    return (
      <Container>
        <h1>Project not found</h1>
        <BackButton to="/projects">← Back to Projects</BackButton>
      </Container>
    );
  }

  return (
    <ProjectDetailPage>
      <Container>
        <BackButton to="/projects">← Back to Projects</BackButton>
        <ProjectTitle>{project.title}</ProjectTitle>
        
        <ProjectInfo>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectDetails>
            <DetailItem>
              <h3>Location</h3>
              <p>{project.location}</p>
            </DetailItem>
            <DetailItem>
              <h3>Year</h3>
              <p>{project.year}</p>
            </DetailItem>
            <DetailItem>
              <h3>Type of Project</h3>
              <p>{project.type}</p>
            </DetailItem>
            <DetailItem>
              <h3>Client</h3>
              <p>{project.client}</p>
            </DetailItem>
            <DetailItem>
              <h3>Role</h3>
              <p>{project.role}</p>
            </DetailItem>
          </ProjectDetails>

          <RequirementsList>
            <h3>Project Requirements</h3>
            {project.requirements && (
              project.requirements.firstFloor ? (
                <>
                  <FloorRequirements>
                    <h4>First Floor</h4>
                    <ul>
                      {project.requirements.firstFloor.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </FloorRequirements>
                  <FloorRequirements>
                    <h4>Second Floor</h4>
                    <ul>
                      {project.requirements.secondFloor.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </FloorRequirements>
                </>
              ) : (
                <FloorRequirements>
                  <h4>Facilities</h4>
                  <ul>
                    {project.requirements.facilities.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </FloorRequirements>
              )
            )}
          </RequirementsList>

          <SectionTitle>Project Details</SectionTitle>
          <ul>
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </ProjectInfo>

        {project.buildings ? (
          <>
            <SectionTitle>Site Development Plan</SectionTitle>
            <ImageGrid>
              {project.images.map((image, index) => (
                <ImageContainer 
                  key={index} 
                  onClick={() => handleImageClick(image, index, 'siteplan')}
                >
                  <img src={image} alt="Site Development Plan" />
                </ImageContainer>
              ))}
            </ImageGrid>

            <BuildingSection>
              {project.perspectives && (
                <>
                  <BuildingCategory>Perspectives</BuildingCategory>
                  
                  {project.perspectives.exterior && (
                    <>
                      <h3 style={{ marginBottom: '2rem', color: props => props.theme.colors.gray.medium }}>Exterior Views</h3>
                      <BuildingsGrid>
                        {project.perspectives.exterior.map((view, index) => (
                          <BuildingCard key={index}>
                            <BuildingImages>
                              {view.images.map((image, imgIndex) => (
                                <BuildingImageWrapper 
                                  key={imgIndex}
                                  onClick={() => handleImageClick(image, imgIndex, 'exterior')}
                                >
                                  <img src={image} alt={`${view.name} ${imgIndex + 1}`} />
                                </BuildingImageWrapper>
                              ))}
                            </BuildingImages>
                            <BuildingInfo>
                              <h4>{view.name}</h4>
                            </BuildingInfo>
                          </BuildingCard>
                        ))}
                      </BuildingsGrid>
                    </>
                  )}

                  {project.perspectives.interior && (
                    <>
                      <h3 style={{ margin: '3rem 0 2rem', color: props => props.theme.colors.gray.medium }}>Interior Views</h3>
                      <BuildingsGrid>
                        {project.perspectives.interior.map((view, index) => (
                          <BuildingCard key={index}>
                            <BuildingImages>
                              {view.images.map((image, imgIndex) => (
                                <BuildingImageWrapper 
                                  key={imgIndex}
                                  onClick={() => handleImageClick(image, imgIndex, 'interior')}
                                >
                                  <img src={image} alt={`${view.name} ${imgIndex + 1}`} />
                                </BuildingImageWrapper>
                              ))}
                            </BuildingImages>
                            <BuildingInfo>
                              <h4>{view.name}</h4>
                            </BuildingInfo>
                          </BuildingCard>
                        ))}
                      </BuildingsGrid>
                    </>
                  )}

                  {project.perspectives.aerial && (
                    <>
                      <h3 style={{ margin: '3rem 0 2rem', color: props => props.theme.colors.gray.medium }}>Aerial & Perspective Views</h3>
                      <BuildingsGrid>
                        {project.perspectives.aerial.map((view, index) => (
                          <BuildingCard key={index}>
                            <BuildingImages>
                              {view.images.map((image, imgIndex) => (
                                <BuildingImageWrapper 
                                  key={imgIndex}
                                  onClick={() => handleImageClick(image, imgIndex, 'aerial')}
                                >
                                  <img src={image} alt={`${view.name} ${imgIndex + 1}`} />
                                </BuildingImageWrapper>
                              ))}
                            </BuildingImages>
                            <BuildingInfo>
                              <h4>{view.name}</h4>
                            </BuildingInfo>
                          </BuildingCard>
                        ))}
                      </BuildingsGrid>
                    </>
                  )}
                </>
              )}

              <BuildingCategory>Major Buildings</BuildingCategory>
              <BuildingsGrid>
                {project.buildings.major.map((building, index) => (
                  <BuildingCard key={index}>
                    <BuildingImages>
                      {building.images.map((image, imgIndex) => (
                        <BuildingImageWrapper 
                          key={imgIndex}
                          onClick={() => handleImageClick(image, imgIndex, 'buildings')}
                        >
                          <img src={image} alt={`${building.name} view ${imgIndex + 1}`} />
                        </BuildingImageWrapper>
                      ))}
                    </BuildingImages>
                    <BuildingInfo>
                      <h4>{building.name}</h4>
                    </BuildingInfo>
                  </BuildingCard>
                ))}
              </BuildingsGrid>
            </BuildingSection>
          </>
        ) : (
          <ImageGrid>
            {project.images.map((image, index) => (
              <ImageContainer 
                key={index} 
                onClick={() => handleImageClick(image, index)}
              >
                <img src={image} alt={`Project view ${index + 1}`} />
              </ImageContainer>
            ))}
          </ImageGrid>
        )}

        {selectedImage && (
          <Modal onClick={handleClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
              <CloseButton onClick={handleClose}>&times;</CloseButton>
              <NavigationButton 
                direction="prev" 
                onClick={handlePrevImage}
              >
                &#8249;
              </NavigationButton>
              <ModalImage src={selectedImage} alt="Full size view" />
              <NavigationButton 
                direction="next" 
                onClick={handleNextImage}
              >
                &#8250;
              </NavigationButton>
            </ModalContent>
          </Modal>
        )}
      </Container>
    </ProjectDetailPage>
  );
};

export default ProjectDetail; 