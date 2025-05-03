import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ensureString } from '../utils/i18n-helpers';
import { 
  getHomepageImage, 
  getFeaturedDestinationImage, 
  getFeaturedExperienceImage,
  fallbackImage
} from '../utils/sample-data';
import SEO from '../components/SEO';
import Button, { ButtonProps } from '../components/ui/Button'; // Update import to include ButtonProps
import Card from '../components/ui/Card';
import { AFFILIATE_LINKS, getAffiliateLink } from '../constants/links';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 500px;
  max-height: 800px;
  background-image: url(${getHomepageImage('hero')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 4rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Section = styled.section`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2<{ $light?: boolean }>`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${props => props.$light ? 'white' : props.theme.colors.text};
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const DestinationCard = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: ${props => props.theme.transitions.medium};
  background-color: white;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const DestinationImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${DestinationCard}:hover & img {
    transform: scale(1.05);
  }
`;

const DestinationContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const DestinationName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
`;

const DestinationLocation = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 0.8rem;
`;

const DestinationDescription = styled.p`
  font-size: 1rem;
  flex-grow: 1;
`;

const CenteredButton = styled.div`
  text-align: center;
`;

const CTAButton = styled(Button)<ButtonProps>`
  margin: 0 auto;
`;

// Add this tracking function
const trackAffiliateClick = (linkName: string) => {
  // Log click for debugging
  console.log(`Affiliate link clicked: ${linkName}`);
  
  // If using Google Analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore - gtag might not be typed
    window.gtag('event', 'affiliate_click', {
      affiliate_name: linkName,
      affiliate_url: AFFILIATE_LINKS.QUIZ_TOOL
    });
  }
};

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  const featuredDestinations = [
    {
      id: '1',
      name: 'Paris',
      country: 'France',
      slug: 'paris',
      description: 'Experience the romance and charm of the City of Light.'
    },
    {
      id: '2',
      name: 'Bali',
      country: 'Indonesia',
      slug: 'bali',
      description: 'Discover tropical paradise with stunning beaches and rich culture.'
    },
    {
      id: '3',
      name: 'Tokyo',
      country: 'Japan',
      slug: 'tokyo',
      description: 'Explore the perfect blend of traditional and ultramodern.'
    },
    {
      id: '4',
      name: 'New York',
      country: 'USA',
      slug: 'newyork',
      description: 'Visit the vibrant city that never sleeps.'
    }
  ];
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImage;
  };
  
  return (
    <>
      <SEO 
        title={ensureString(t, 'home.seo.title', 'Travel Recommender | Find Your Perfect Destination')}
        description={ensureString(t, 'home.seo.description', 'Discover amazing travel destinations, personalized recommendations, and practical travel tips to plan your perfect getaway.')}
      />
      
      <HeroSection>
        <HeroContent>
          <HeroTitle>{ensureString(t, 'home.hero.title', 'Discover Your Perfect Destination')}</HeroTitle>
          <HeroSubtitle>
            {ensureString(t, 'home.hero.subtitle', 'Personalized travel recommendations based on your preferences')}
          </HeroSubtitle>
          <HeroButtons>
            <Button 
              as="a" 
              href={AFFILIATE_LINKS.QUIZ_TOOL} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAffiliateClick('hero_button')}
              $primary 
              $large
            >
              {ensureString(t, 'home.hero.quizButton', 'Find My Match')}
            </Button>
            <Button as={Link} to="/destinations" $large>
              {ensureString(t, 'home.hero.browseButton', 'Browse Destinations')}
            </Button>
          </HeroButtons>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>{ensureString(t, 'home.featuredDestinations.title', 'Popular Destinations')}</SectionTitle>
        <SectionSubtitle>
          {ensureString(t, 'home.featuredDestinations.subtitle', 'Explore these trending places loved by travelers')}
        </SectionSubtitle>
        
        <DestinationsGrid>
          {featuredDestinations.map(destination => (
            <DestinationCard 
              to={`/destinations/${destination.slug}`} 
              key={destination.id}
            >
              <DestinationImage>
                <img 
                  src={getFeaturedDestinationImage(destination.slug)} 
                  alt={destination.name} 
                  onError={handleImageError}
                />
              </DestinationImage>
              <DestinationContent>
                <DestinationName>{destination.name}</DestinationName>
                <DestinationLocation>{destination.country}</DestinationLocation>
                <DestinationDescription>{destination.description}</DestinationDescription>
              </DestinationContent>
            </DestinationCard>
          ))}
        </DestinationsGrid>
        
        <CenteredButton>
          <CTAButton 
            as="a" 
            href={AFFILIATE_LINKS.QUIZ_TOOL}
            target="_blank"
            rel="noopener noreferrer" 
            onClick={() => trackAffiliateClick('cta_button')}
            $primary 
            $large
          >
            {ensureString(t, 'home.cta.button', 'Start the Quiz')}
          </CTAButton>
        </CenteredButton>
      </Section>
    </>
  );
};

export default HomePage;