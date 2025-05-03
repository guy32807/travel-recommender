import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ensureString } from '../utils/i18n-helpers';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #0066cc;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  
  &:hover {
    background-color: #0052a3;
  }
`;

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Container>
      <Title>404</Title>
      <Message>
        {ensureString(t, 'notFound.message', 'The page you are looking for does not exist or has been moved.')}
      </Message>
      <HomeLink to="/">
        {ensureString(t, 'notFound.backHome', 'Back to Home')}
      </HomeLink>
    </Container>
  );
};

export default NotFoundPage;