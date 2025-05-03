import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ensureString } from '../utils/i18n-helpers';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
// Import the custom SVG icons
import { EmailIcon, PhoneIcon, MapMarkerIcon } from '../components/ui/SocialIcons';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  max-width: 600px;
  margin: 0 auto;
  color: ${props => props.theme.colors.textLight};
  font-size: 1.1rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const ContactMethod = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactMethodTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
`;

const ContactMethodContent = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.text};
`;

const FormCard = styled(Card)`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: -1;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small};
  font-family: inherit;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small};
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.small};
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
`;

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <>
      <SEO 
        title={ensureString(t, 'contact.seo.title', 'Contact Us | Travel Recommender')}
        description={ensureString(t, 'contact.seo.description', 'Get in touch with our travel experts. We\'re here to help with your travel plans and answer your questions.')}
      />
      
      <Container>
        <HeroSection>
          <PageTitle>{ensureString(t, 'contact.title', 'Contact Us')}</PageTitle>
          <PageDescription>
            {ensureString(t, 'contact.subtitle', 'Have questions or need assistance? Our team is here to help you plan your perfect trip.')}
          </PageDescription>
        </HeroSection>
        
        <ContactGrid>
          <ContactInfoCard elevation="medium">
            <ContactMethod>
              <ContactMethodTitle>
                <IconWrapper>
                  <EmailIcon />
                </IconWrapper>
                {ensureString(t, 'contact.email', 'Email')}
              </ContactMethodTitle>
              <ContactMethodContent>contact@travel-recommender.com</ContactMethodContent>
            </ContactMethod>
            
            <ContactMethod>
              <ContactMethodTitle>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
                {ensureString(t, 'contact.phone', 'Phone')}
              </ContactMethodTitle>
              <ContactMethodContent>+1 (555) 123-4567</ContactMethodContent>
            </ContactMethod>
            
            <ContactMethod>
              <ContactMethodTitle>
                <IconWrapper>
                  <MapMarkerIcon />
                </IconWrapper>
                {ensureString(t, 'contact.address', 'Address')}
              </ContactMethodTitle>
              <ContactMethodContent>
                123 Travel Street<br />San Francisco, CA 94105<br />USA
              </ContactMethodContent>
            </ContactMethod>
          </ContactInfoCard>
          
          <FormCard elevation="medium">
            {formSubmitted && (
              <SuccessMessage>
                {ensureString(t, 'contact.successMessage', 'Thank you for your message! We will get back to you as soon as possible.')}
              </SuccessMessage>
            )}
            
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">{ensureString(t, 'contact.form.name', 'Your Name')}</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">{ensureString(t, 'contact.form.email', 'Email Address')}</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">{ensureString(t, 'contact.form.subject', 'Subject')}</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">{ensureString(t, 'contact.form.message', 'Your Message')}</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <Button type="submit" $fullWidth>
                {ensureString(t, 'contact.form.submit', 'Send Message')}
              </Button>
            </form>
          </FormCard>
        </ContactGrid>
      </Container>
    </>
  );
};

export default ContactPage;