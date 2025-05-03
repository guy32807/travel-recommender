import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getBlogPostBySlug, getRelatedPosts, BlogPost } from '../data/blog';
import { ensureString } from '../utils/i18n-helpers';
import { getBlogImage, blogFallbackImage } from '../utils/sample-data';
import SEO from '../components/SEO';

// Proper interface for date format options
interface DateFormatOptions {
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day: 'numeric' | '2-digit';
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ArticleHeader = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

const Category = styled.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Meta = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
`;

const Date = styled.span``;

const ReadTime = styled.span``;

const MainImage = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: 2rem;
  
  img {
    width: 100%;
    height: auto;
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
  font-size: 1rem;
  border-radius: ${props => props.theme.borderRadius.medium};
`;

const ArticleContent = styled.div`
  line-height: 1.7;
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  img {
    max-width: 100%;
    border-radius: ${props => props.theme.borderRadius.small};
    margin: 1.5rem 0;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  blockquote {
    border-left: 4px solid ${props => props.theme.colors.primary};
    padding-left: 1rem;
    font-style: italic;
    margin: 1.5rem 0;
  }
`;

const TagsSection = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const TagsTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: ${props => props.theme.colors.backgroundAlt};
  color: ${props => props.theme.colors.text};
  padding: 0.4rem 0.8rem;
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: 0.9rem;
`;

const RelatedPosts = styled.section`
  margin-top: 4rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const RelatedCard = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: ${props => props.theme.transitions.medium};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const RelatedImage = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${RelatedCard}:hover & img {
    transform: scale(1.05);
  }
`;

const RelatedTitle = styled.h4`
  padding: 1rem;
  font-size: 1.1rem;
  line-height: 1.3;
`;

const RelatedDate = styled.span`
  display: block;
  padding: 0 1rem 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
`;

// Helper function for safe date formatting
function formatDateSafely(dateString: string): string {
  try {
    // Manually split the date string to avoid Date constructor issues
    const parts = dateString.split('-');
    if (parts.length !== 3) {
      return 'Invalid date format';
    }
    
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // JS months are 0-11
    const day = parseInt(parts[2], 10);
    
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      return 'Invalid date values';
    }
    
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return `${months[month]} ${day}, ${year}`;
  } catch (e) {
    console.error('Error formatting date:', e);
    return 'Invalid date';
  }
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    if (slug) {
      const blogPost = getBlogPostBySlug(slug);
      if (blogPost) {
        setPost(blogPost);
        setRelatedPosts(getRelatedPosts(blogPost, 3));
      }
    }
  }, [slug]);
  
  if (!post) {
    return <Container>Loading...</Container>;
  }
  
  const handleImageError = () => {
    console.error('Image error occurred for blog post:', slug);
    setImageError(true);
  };
  
  const imageUrl = getBlogImage(post.slug);
  
  return (
    <>
      <SEO 
        title={`${post.title} | Travel Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        image={imageUrl}
      />
      
      <Container>
        <ArticleHeader>
          <Category>{post.category}</Category>
          <Title>{post.title}</Title>
          <Meta>
            <Date>{formatDateSafely(post.date)}</Date>
            <ReadTime>{post.readTime} min read</ReadTime>
          </Meta>
        </ArticleHeader>
        
        <MainImage>
          {!imageError ? (
            <img 
              src={imageUrl} 
              alt={post.title} 
              onError={handleImageError}
            />
          ) : (
            <ImageFallback>
              Image not available
            </ImageFallback>
          )}
        </MainImage>
        
        <ArticleContent dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <TagsSection>
          <TagsTitle>{ensureString(t, 'blog.tags', 'Tags')}</TagsTitle>
          <TagsList>
            {post.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsList>
        </TagsSection>
        
        {relatedPosts.length > 0 && (
          <RelatedPosts>
            <SectionTitle>{ensureString(t, 'blog.relatedPosts', 'You Might Also Like')}</SectionTitle>
            <RelatedGrid>
              {relatedPosts.map(relatedPost => (
                <RelatedCard to={`/blog/${relatedPost.slug}`} key={relatedPost.slug}>
                  <RelatedImage>
                    <img 
                      src={getBlogImage(relatedPost.slug)} 
                      alt={relatedPost.title} 
                      onError={(e) => { e.currentTarget.src = blogFallbackImage; }}
                    />
                  </RelatedImage>
                  <RelatedTitle>{relatedPost.title}</RelatedTitle>
                  <RelatedDate>{formatDateSafely(relatedPost.date)}</RelatedDate>
                </RelatedCard>
              ))}
            </RelatedGrid>
          </RelatedPosts>
        )}
      </Container>
    </>
  );
};

export default BlogPostPage;