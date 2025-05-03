import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  background-color: #f8f9fa;
  padding: 3rem 2rem;
  border-radius: 8px;
  margin: 3rem 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #0066cc;
  }
  
  @media (max-width: 576px) {
    border-radius: 4px;
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 0 4px 4px 0;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #0052a3;
  }
  
  @media (max-width: 576px) {
    border-radius: 4px;
  }
`;

const Message = styled.div<{ $success?: boolean }>`
  margin-top: 1.5rem;
  padding: 0.75rem;
  border-radius: 4px;
  background-color: ${props => props.$success ? '#d4edda' : '#f8d7da'};
  color: ${props => props.$success ? '#155724' : '#721c24'};
  display: ${props => props.children ? 'block' : 'none'};
`;

const Newsletter: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Fix: Ensure string type for setMessage
      const errorMessage = t('newsletter.invalidEmail', 'Please enter a valid email address.');
      setMessage(errorMessage as string);
      setSuccess(false);
      return;
    }
    
    // In a real app, you would send this to your API
    console.log('Subscribing email:', email);
    
    // Simulate API call
    setTimeout(() => {
      // Show success message
      setSuccess(true);
      // Fix: Ensure string type for setMessage
      const successMessage = t('newsletter.success', 'Thank you for subscribing to our newsletter!');
      setMessage(successMessage as string);
      setEmail('');
      
      // Reset message after a few seconds
      setTimeout(() => {
        setMessage('');
      }, 5000);
    }, 1000);
  };
  
  return (
    <Container>
      <Title>{t('newsletter.title', 'Subscribe to Our Newsletter')}</Title>
      <Description>
        {t('newsletter.description', 'Get the latest travel tips, destination guides, and exclusive deals delivered straight to your inbox.')}
      </Description>
      
      <Form onSubmit={handleSubmit}>
        <Input 
          type="email" 
          placeholder={t('newsletter.placeholder', 'Your email address') as string}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">
          {t('newsletter.button', 'Subscribe')}
        </Button>
      </Form>
      
      {message && (
        <Message $success={success}>{message}</Message>
      )}
    </Container>
  );
};

export default Newsletter;