import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
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

const InfoItem = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(42, 157, 143, 0.15);
  }
  
  h4 {
    color: ${props => props.theme.colors.accent};
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '•';
      color: ${props => props.theme.colors.accent};
    }
  }

  p {
    color: ${props => props.theme.colors.gray.dark};
    margin-left: 1rem;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(42, 157, 143, 0.15);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.gray.dark};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.gray.light};
  border-radius: 8px;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.8rem;
    font-size: 16px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.gray.light};
  border-radius: 8px;
  font-family: inherit;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.8rem;
    font-size: 16px;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.accent},
    ${props => props.theme.colors.accent2}
  );
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(42, 157, 143, 0.2);
  }

  &:disabled {
    background: ${props => props.theme.colors.gray.medium};
    cursor: not-allowed;
    transform: none;
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

const SuccessMessage = styled.div`
  color: #2ecc71;
  margin-top: 1rem;
  text-align: center;
  padding: 1rem;
  background: rgba(46, 204, 113, 0.1);
  border-radius: 8px;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  margin-top: 1rem;
  text-align: center;
  padding: 1rem;
  background: rgba(231, 76, 60, 0.1);
  border-radius: 8px;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.accent};
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.accent2};
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e0b03c45-1dd0-4f64-b99b-cf527e49971d',
          ...formData
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: error.message
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get in Touch</SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <h3>Let's Discuss Your Project</h3>
            <InfoItem>
              <h4>Address</h4>
              <p>Valenzuela City</p>
            </InfoItem>
            <InfoItem>
              <h4>Email</h4>
              <p>cliffordsison26@gmail.com</p>
            </InfoItem>
            <InfoItem>
              <h4>Phone</h4>
              <p>(+63) 928-638-7209</p>
            </InfoItem>
            <SocialLinks>
              <SocialLink 
                href="https://www.linkedin.com/in/archjcliffordsison/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={status.submitting}>
              {status.submitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status.success && (
              <SuccessMessage>Message sent successfully!</SuccessMessage>
            )}
            {status.error && (
              <ErrorMessage>{status.error}</ErrorMessage>
            )}
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 