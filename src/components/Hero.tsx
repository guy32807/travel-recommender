import React from 'react';
import styled from 'styled-components';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  height?: string;
}

const HeroContainer = styled.div<{ $backgroundImage: string; $height?: string }>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height || '500px'};
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Hero image",
  buttonText,
  buttonLink,
  height
}) => {
  return (
    <HeroContainer $backgroundImage={imageSrc} $height={height}>
      <ContentWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {buttonText && buttonLink && (
          <Button href={buttonLink} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </Button>
        )}
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;