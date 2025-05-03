import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Define Blog Post type
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
}

interface RelatedPostsProps {
  posts: BlogPost[];
  title?: string;
}

const Container = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const PostCard = styled.div`
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const PostImage = styled.div`
  height: 150px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    ${PostCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const PostTitle = styled.h4`
  padding: 1rem;
  font-size: 1rem;
  margin: 0;
`;

const PostLink = styled(Link)`
  color: var(--text-color, #333);
  text-decoration: none;
  
  &:hover {
    color: var(--primary-color, #0066cc);
  }
`;

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts, title }) => {
  const { t } = useTranslation();
  
  if (!posts || posts.length === 0) {
    return null;
  }
  
  return (
    <Container>
      <Title>{title || t('blog.relatedPosts', 'You May Also Like')}</Title>
      <PostsGrid>
        {posts.map(post => (
          <PostCard key={post.id}>
            <PostLink to={`/blog/${post.slug}`}>
              <PostImage>
                <img src={post.imageUrl} alt={post.imageAlt} />
              </PostImage>
              <PostTitle>{post.title}</PostTitle>
            </PostLink>
          </PostCard>
        ))}
      </PostsGrid>
    </Container>
  );
};

export default RelatedPosts;