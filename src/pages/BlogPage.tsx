import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getAllBlogPosts, BlogPost } from '../data/blog';
import { ensureString } from '../utils/i18n-helpers';
import { getBlogImage, blogCategoryImages, blogFallbackImage } from '../utils/sample-data';
import SEO from '../components/SEO';

// Styled components
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
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textLight};
  max-width: 700px;
  margin: 0 auto;
`;

const FiltersSection = styled.div`
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const CategoryButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.$active ? props.theme.colors.primary : '#ddd'};
  background-color: ${props => props.$active ? props.theme.colors.primary : 'white'};
  color: ${props => props.$active ? 'white' : props.theme.colors.text};
  border-radius: ${props => props.theme.borderRadius.small};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.backgroundAlt};
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: ${props => props.theme.colors.textLight};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const BlogCard = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: ${props => props.theme.transitions.medium};
  height: 100%;
  text-decoration: none;
  color: inherit;
  background-color: white;
  
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
  
  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardCategory = styled.div`
  font-size: 0.85rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const CardTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const CardDate = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 0.75rem;
`;

const CardExcerpt = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const ReadMoreLink = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 0.9rem;
`;

const FeaturedCategories = styled.section`
  margin-top: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const CategoryCard = styled.div`
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryImageWrapper = styled.div`
  height: 150px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${CategoryCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CategoryName = styled.div`
  padding: 1rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.1rem;
`;

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const allPosts = getAllBlogPosts();
    setPosts(allPosts);
    setFilteredPosts(allPosts);
  }, []);
  
  useEffect(() => {
    let results = posts;
    
    // Filter by category
    if (selectedCategory) {
      results = results.filter(post => 
        post.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredPosts(results);
  }, [selectedCategory, searchQuery, posts]);
  
  // Get unique categories in a TypeScript-compatible way
  const getUniqueCategories = (): string[] => {
    const categoriesSet = new Set<string>();
    posts.forEach(post => {
      if (post.category) {
        categoriesSet.add(post.category);
      }
    });
    return Array.from(categoriesSet);
  };
  
  const categories = getUniqueCategories();
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = blogFallbackImage;
  };
  
  // Format date in a TypeScript-compatible way
  const formatDate = (dateString: string): string => {
    try {
      const timestamp = Date.parse(dateString);
      
      if (isNaN(timestamp)) {
        console.error('Invalid date string:', dateString);
        return 'Invalid date';
      }
      
      const date = new Date(timestamp);
      
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      console.error('Error formatting date:', e);
      return 'Invalid date';
    }
  };
  
  // Function to get category image
  const getCategoryImage = (category: string): string => {
    const normalizedCategory = category.toLowerCase().replace(/\s+/g, '-');
    return blogCategoryImages[normalizedCategory] || blogFallbackImage;
  };
  
  return (
    <>
      <SEO 
        title={ensureString(t, 'blog.seo.title', 'Travel Blog | Tips, Guides & Experiences')}
        description={ensureString(t, 'blog.seo.description', 'Explore our travel blog for inspiration, destination guides, travel tips, and first-hand experiences from around the world.')}
      />
      
      <Container>
        <HeroSection>
          <PageTitle>{ensureString(t, 'blog.title', 'Travel Blog')}</PageTitle>
          <PageDescription>
            {ensureString(t, 'blog.description', 'Discover travel tips, destination guides, and stories from around the world.')}
          </PageDescription>
        </HeroSection>
        
        <FiltersSection>
          <SearchBar>
            <SearchInput 
              type="text"
              placeholder={ensureString(t, 'blog.searchPlaceholder', 'Search for articles...')}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </SearchBar>
          
          <CategoriesContainer>
            {categories.map(category => (
              <CategoryButton 
                key={category}
                $active={category === selectedCategory}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoriesContainer>
        </FiltersSection>
        
        {filteredPosts.length === 0 ? (
          <NoResults>
            {ensureString(t, 'blog.noResults', 'No articles found. Try adjusting your search or category filter.')}
          </NoResults>
        ) : (
          <BlogGrid>
            {filteredPosts.map(post => (
              <BlogCard to={`/blog/${post.slug}`} key={post.slug}>
                <CardImage>
                  <img 
                    src={getBlogImage(post.slug)} 
                    alt={post.title} 
                    onError={handleImageError}
                  />
                </CardImage>
                <CardContent>
                  <CardCategory>{post.category}</CardCategory>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDate>{formatDate(post.date)}</CardDate>
                  <CardExcerpt>{post.excerpt}</CardExcerpt>
                  <ReadMoreLink>
                    {ensureString(t, 'blog.readMore', 'Read More')} →
                  </ReadMoreLink>
                </CardContent>
              </BlogCard>
            ))}
          </BlogGrid>
        )}
        
        <FeaturedCategories>
          <SectionTitle>{ensureString(t, 'blog.featuredCategories', 'Featured Categories')}</SectionTitle>
          <CategoryGrid>
            {categories.map(category => (
              <CategoryCard 
                key={category}
                onClick={() => handleCategoryChange(category)}
              >
                <CategoryImageWrapper>
                  <img 
                    src={getCategoryImage(category)} 
                    alt={category} 
                    onError={handleImageError}
                  />
                </CategoryImageWrapper>
                <CategoryName>{category}</CategoryName>
              </CategoryCard>
            ))}
          </CategoryGrid>
        </FeaturedCategories>
      </Container>
    </>
  );
};

export default BlogPage;