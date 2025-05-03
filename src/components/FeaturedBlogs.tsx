import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../utils/formatDate';

// Define Blog Post type
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  publishedAt: Date;
  readingTime: number;
  author: string;
  tags: string[];
}

interface FeaturedBlogsProps {
  posts: BlogPost[];
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.article`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    ${BlogCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
  color: var(--text-light, #666);
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

const TitleLink = styled(Link)`
  color: var(--text-color, #333);
  text-decoration: none;
  
  &:hover {
    color: var(--primary-color, #0066cc);
  }
`;

const Excerpt = styled.p`
  font-size: 0.9rem;
  color: var(--text-light, #666);
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  color: var(--primary-color, #0066cc);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FeaturedBlogs: React.FC<FeaturedBlogsProps> = ({ posts }) => {
  const { t } = useTranslation();
  
  if (!posts || posts.length === 0) {
    return (
      <p style={{ textAlign: 'center', padding: '2rem' }}>
        {t('blog.noPosts', 'No blog posts available at the moment.')}
      </p>
    );
  }
  
  return (
    <Container>
      {posts.map(post => (
        <BlogCard key={post.id}>
          <ImageContainer>
            <img src={post.imageUrl} alt={post.imageAlt} />
          </ImageContainer>
          <Content>
            <Meta>
              <span>{formatDate(post.publishedAt)}</span>
              <span>{t('blog.readingTime', { minutes: post.readingTime })}</span>
            </Meta>
            <Title>
              <TitleLink to={`/blog/${post.slug}`}>{post.title}</TitleLink>
            </Title>
            <Excerpt>{post.excerpt}</Excerpt>
            <ReadMoreLink to={`/blog/${post.slug}`}>
              {t('blog.readMore', 'Read More')} →
            </ReadMoreLink>
          </Content>
        </BlogCard>
      ))}
    </Container>
  );
};

export default FeaturedBlogs;