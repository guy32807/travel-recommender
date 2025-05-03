import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getAllDestinations, Destination } from '../data/destinations';
import { ensureString } from '../utils/i18n-helpers';
import { getImageForDestination } from '../utils/sample-data';
import SEO from '../components/SEO';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-light, #666);
  max-width: 700px;
  margin: 0 auto;
`;

const FiltersSection = styled.div`
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TagFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TagButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ $active }) => ($active ? '#007bff' : 'white')};
  color: ${({ $active }) => ($active ? 'white' : '#007bff')};
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

const NoResults = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-light, #666);
`;

const DestinationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const DestinationCard = styled(Link)`
  display: block;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: ${props => props.theme.transitions.medium};
  background-color: white;
  height: 100%;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const CardImage = styled.div`
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

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const CardLocation = styled.div`
  font-size: 0.9rem;
  color: var(--text-light, #666);
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: var(--text-dark, #333);
  margin-bottom: 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CardTag = styled.span`
  background-color: #f1f1f1;
  color: #333;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  border-radius: 4px;
`;

const DestinationsPage: React.FC = () => {
  const { t } = useTranslation();
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState('');

  useEffect(() => {
    const allDestinations = getAllDestinations();
    setDestinations(allDestinations);
    setFilteredDestinations(allDestinations);
  }, []);

  useEffect(() => {
    let results = destinations;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(dest =>
        dest.name.toLowerCase().includes(query) ||
        dest.country.toLowerCase().includes(query) ||
        (dest.region && dest.region.toLowerCase().includes(query))
      );
    }

    // Apply tag filter
    if (filterTag) {
      results = results.filter(dest =>
        dest.tags.includes(filterTag)
      );
    }

    setFilteredDestinations(results);
  }, [searchQuery, filterTag, destinations]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleTagFilter = (tag: string) => {
    setFilterTag(tag === filterTag ? '' : tag);
  };

  // Get all unique tags for filter - fixed to be compatible with older TypeScript/ES targets
  const getAllUniqueTags = (): string[] => {
    const tagSet = new Set<string>();
    destinations.forEach(dest => {
      dest.tags.forEach(tag => {
        tagSet.add(tag);
      });
    });
    return Array.from(tagSet).sort();
  };

  const allTags = getAllUniqueTags();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop';
  };

  return (
    <>
      <SEO
        title={ensureString(t, 'destinations.seo.title', 'Explore Travel Destinations | Travel Recommender')}
        description={ensureString(t, 'destinations.seo.description', 'Discover amazing destinations around the world. Find travel inspiration and information for your next adventure.')}
      />

      <Container>
        <HeroSection>
          <PageTitle>{ensureString(t, 'destinations.title', 'Discover Amazing Destinations')}</PageTitle>
          <PageDescription>
            {ensureString(t, 'destinations.description', 'Explore our carefully curated list of destinations and find your next adventure.')}
          </PageDescription>
        </HeroSection>

        <FiltersSection>
          <SearchBar>
            <SearchInput
              type="text"
              placeholder={ensureString(t, 'destinations.searchPlaceholder', 'Search for a destination...')}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </SearchBar>

          <TagFilters>
            {allTags.map(tag => (
              <TagButton
                key={tag}
                $active={tag === filterTag}
                onClick={() => handleTagFilter(tag)}
              >
                {tag}
              </TagButton>
            ))}
          </TagFilters>
        </FiltersSection>

        {filteredDestinations.length === 0 ? (
          <NoResults>
            {ensureString(t, 'destinations.noResults', 'No destinations found. Try adjusting your search or filters.')}
          </NoResults>
        ) : (
          <DestinationGrid>
            {filteredDestinations.map(destination => (
              <DestinationCard to={`/destinations/${destination.slug}`} key={destination.slug}>
                <CardImage>
                  <img
                    src={getImageForDestination(destination.slug)}
                    alt={destination.imageAlt || destination.name}
                    onError={handleImageError}
                  />
                </CardImage>
                <CardContent>
                  <CardTitle>{destination.name}</CardTitle>
                  <CardLocation>{destination.country}{destination.region ? `, ${destination.region}` : ''}</CardLocation>
                  <CardDescription>{destination.description}</CardDescription>
                  <TagContainer>
                    {destination.tags.slice(0, 3).map(tag => (
                      <CardTag key={tag}>{tag}</CardTag>
                    ))}
                  </TagContainer>
                </CardContent>
              </DestinationCard>
            ))}
          </DestinationGrid>
        )}
      </Container>
    </>
  );
};

export default DestinationsPage;