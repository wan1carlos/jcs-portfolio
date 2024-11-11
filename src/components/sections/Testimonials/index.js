import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.theme.colors.secondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background-color: ${props => props.theme.colors.gray.light};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.gray.dark};
  line-height: 1.6;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  h4 {
    margin: 0;
    color: ${props => props.theme.colors.primary};
  }

  p {
    margin: 0;
    color: ${props => props.theme.colors.gray.medium};
    font-size: 0.9rem;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Working with this architect was an incredible experience. They transformed our vision into reality while keeping sustainability at the forefront.",
      author: "Sarah Johnson",
      role: "Property Developer",
      image: "/images/testimonial1.jpg"
    },
    {
      id: 2,
      quote: "Their attention to detail and innovative approach to design challenges resulted in a space that exceeded our expectations.",
      author: "Michael Chen",
      role: "Business Owner",
      image: "/images/testimonial2.jpg"
    },
    {
      id: 3,
      quote: "A true professional who combines creativity with practicality. The end result was both beautiful and functional.",
      author: "Emma Davis",
      role: "Interior Designer",
      image: "/images/testimonial3.jpg"
    }
  ];

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <SectionTitle>Client Testimonials</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id}>
              <Quote>{testimonial.quote}</Quote>
              <Author>
                <AuthorImage>
                  <img src={testimonial.image} alt={testimonial.author} />
                </AuthorImage>
                <AuthorInfo>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 