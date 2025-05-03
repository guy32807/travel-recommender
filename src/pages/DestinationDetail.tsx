import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getDestinationBySlug, Destination } from '../data/destinations';
import { getDestinationLink } from '../utils/affiliate-links';
import { ensureString } from '../utils/i18n-helpers';
import { sampleImages, fallbackImage, getImageForDestination } from '../utils/sample-data';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const DestinationHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: ${props => props.theme.colors.textLight};
    font-size: 1.2rem;
  }
`;

const MainImage = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

const ImageFallback = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${props => props.theme.colors.backgroundAlt};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textLight};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
  }
  
  p {
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  ul {
    margin-bottom: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const Sidebar = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: -1;
  }
`;

const SidebarCard = styled(Card)`
  margin-bottom: 2rem;
`;

const CardHeader = styled.h3`
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  
  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.textLight};
  }
  
  p {
    font-weight: 500;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background-color: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.primary};
  padding: 0.3rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: 0.9rem;
`;

const AffiliateCard = styled(Card)`
  background-color: ${props => props.theme.colors.primaryLight};
  border-left: 4px solid ${props => props.theme.colors.primary};
  text-align: center;
`;

const DestinationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (slug) {
      const foundDestination = getDestinationBySlug(slug);
      if (foundDestination) {
        setDestination(foundDestination);
      }
    }
  }, [slug]);
  
  if (!destination) {
    return <Container>Loading...</Container>;
  }
  
  // Create a string with activities for keywords
  const activitiesString = destination.activities ? destination.activities.join(', ') : '';

  // Handle image loading with fallback
  const handleImageError = () => {
    console.error('Image error occurred for:', destination.slug);
    setImageError(true);
  };

  const imageUrl = getImageForDestination(destination.slug);
  
  console.log('Using image URL:', imageUrl, 'for destination:', destination.slug);

  return (
    <>
      <SEO 
        title={`${destination.name} | ${destination.country} Travel Guide`}
        description={destination.description}
        keywords={`${destination.name}, ${destination.country}, ${destination.tags.join(', ')}, ${activitiesString}`}
        image={imageUrl}
      />
      
      <Container>
        <DestinationHeader>
          <h1>{destination.name}</h1>
          <p>{destination.country}{destination.region ? `, ${destination.region}` : ''}</p>
        </DestinationHeader>
        
        <MainImage>
          {!imageError ? (
            <img 
              src={imageUrl} 
              alt={destination.imageAlt || `${destination.name}, ${destination.country}`} 
              onError={handleImageError}
            />
          ) : (
            <ImageFallback>
              Image not available
            </ImageFallback>
          )}
        </MainImage>
        
        <ContentGrid>
          <MainContent>
            <p>{destination.longDescription}</p>
            
            {destination.highlights && destination.highlights.length > 0 && (
              <div>
                <h3>{ensureString(t, 'destinations.highlights', 'Highlights')}</h3>
                <ul>
                  {destination.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {destination.activities && destination.activities.length > 0 && (
              <div>
                <h3>{ensureString(t, 'destinations.activities', 'Things to Do')}</h3>
                <ul>
                  {destination.activities.map((activity: string, index: number) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <h3>{ensureString(t, 'destinations.whenToGo', 'When to Go')}</h3>
            <p>{destination.bestTimeToVisit || ensureString(t, 'destinations.anytime', 'This destination can be visited year-round.')}</p>
          </MainContent>
          
          <Sidebar>
            <SidebarCard>
              <CardHeader>{ensureString(t, 'destinations.quickFacts', 'Quick Facts')}</CardHeader>
              
              <InfoItem>
                <h4>{ensureString(t, 'destinations.continent', 'Continent')}</h4>
                <p>{destination.continent}</p>
              </InfoItem>
              
              <InfoItem>
                <h4>{ensureString(t, 'destinations.budgetLevel', 'Budget Level')}</h4>
                <p>{destination.budget || ensureString(t, 'destinations.various', 'Various')}</p>
              </InfoItem>
              
              <InfoItem>
                <h4>{ensureString(t, 'destinations.bestTimeToVisit', 'Best Time to Visit')}</h4>
                <p>{destination.bestTimeToVisit || ensureString(t, 'destinations.anytime', 'Year-round')}</p>
              </InfoItem>
              
              <InfoItem>
                <h4>{ensureString(t, 'destinations.tags', 'Experience')}</h4>
                <TagsContainer>
                  {destination.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
              </InfoItem>
            </SidebarCard>
            
            <AffiliateCard>
              <CardHeader>{ensureString(t, 'destinations.planYourTrip', 'Plan Your Trip')}</CardHeader>
              <p>{ensureString(t, 'destinations.affiliateMessage', 'Find the best deals on hotels, flights, and tours for your trip to')} {destination.name}.</p>
              <Button 
                as="a"
                href={getDestinationLink(destination.slug)}
                target="_blank"
                rel="noopener noreferrer"
                $fullWidth
              >
                {ensureString(t, 'destinations.findDeals', 'Find the Best Deals')}
              </Button>
            </AffiliateCard>
          </Sidebar>
        </ContentGrid>
      </Container>
    </>
  );
};

export default DestinationDetail;