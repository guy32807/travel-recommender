import React from 'react';
import styled from 'styled-components';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string;
}

const Container = styled.div<{ $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'var(--primary-light, #e6f0ff)'};
  padding: 3rem 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color, #333);
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--text-light, #666);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.a`
  display: inline-block;
  background-color: var(--primary-color, #0066cc);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--primary-dark, #0052a3);
  }
`;

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundColor
}) => {
  return (
    <Container $backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button 
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </Button>
    </Container>
  );
};

export default CallToAction;