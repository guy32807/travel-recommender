import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAffiliateLink } from '../constants/links';

// Define types
interface Destination {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  country: string;
  region: string;
  featured?: boolean;
}

interface DestinationSliderProps {
  destinations: Destination[];
}

const SliderContainer = styled.div`
  overflow-x: auto;
  padding-bottom: 1rem;
  
  /* Hide scrollbar but allow scrolling */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const DestinationsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem 0;
  min-width: min-content;
`;

const DestinationCard = styled.div`
  flex: 0 0 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const DestinationImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    ${DestinationCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const DestinationContent = styled.div`
  padding: 1.25rem;
  background-color: white;
`;

const DestinationName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const DestinationLocation = styled.p`
  font-size: 0.9rem;
  color: var(--text-light, #666);
  margin-bottom: 0.75rem;
`;

const DestinationDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: var(--text-color, #333);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ExploreButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color, #0066cc);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--primary-dark, #0052a3);
  }
`;

const DestinationSlider: React.FC<DestinationSliderProps> = ({ destinations }) => {
  const { t } = useTranslation();
  
  // If no destinations are provided, show a placeholder message
  if (!destinations || destinations.length === 0) {
    return (
      <p style={{ textAlign: 'center', padding: '2rem' }}>
        {t('destinations.noDestinations', 'No destinations available at the moment.')}
      </p>
    );
  }
  
  return (
    <SliderContainer>
      <DestinationsRow>
        {destinations.map(destination => (
          <DestinationCard key={destination.id}>
            <DestinationImage>
              <img src={destination.imageUrl} alt={destination.name} />
            </DestinationImage>
            <DestinationContent>
              <DestinationName>{destination.name}</DestinationName>
              <DestinationLocation>
                {destination.country}{destination.region ? `, ${destination.region}` : ''}
              </DestinationLocation>
              <DestinationDescription>{destination.description}</DestinationDescription>
              <ExploreButton 
                href={getAffiliateLink('destination_slider', destination.id, destination.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('destinations.explore', 'Explore')}
              </ExploreButton>
            </DestinationContent>
          </DestinationCard>
        ))}
      </DestinationsRow>
    </SliderContainer>
  );
};

export default DestinationSlider;