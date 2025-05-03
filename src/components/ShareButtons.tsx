import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface ShareButtonsProps {
  url: string;
  title: string;
}

const Container = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const Label = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-light, #666);
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: white;
  transition: transform 0.2s, opacity 0.2s;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

const FacebookButton = styled(Button)`
  background-color: #1877f2;
`;

const TwitterButton = styled(Button)`
  background-color: #1da1f2;
`;

const LinkedInButton = styled(Button)`
  background-color: #0a66c2;
`;

const PinterestButton = styled(Button)`
  background-color: #e60023;
`;

const EmailButton = styled(Button)`
  background-color: #666666;
`;

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const { t } = useTranslation();
  
  // Generate full URL
  const fullUrl = `https://guy32807.github.io/travel-recommender${url}`;
  
  // Generate share URLs
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(fullUrl)}&description=${encodeURIComponent(title)}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${fullUrl}`)}`;
  
  return (
    <Container>
      <Label>{t('share.label', 'Share:')}</Label>
      
      <FacebookButton 
        href={facebookUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={t('share.facebook', 'Share on Facebook')}
      >
        <i className="fab fa-facebook-f"></i>
      </FacebookButton>
      
      <TwitterButton 
        href={twitterUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={t('share.twitter', 'Share on Twitter')}
      >
        <i className="fab fa-twitter"></i>
      </TwitterButton>
      
      <LinkedInButton 
        href={linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={t('share.linkedin', 'Share on LinkedIn')}
      >
        <i className="fab fa-linkedin-in"></i>
      </LinkedInButton>
      
      <PinterestButton 
        href={pinterestUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={t('share.pinterest', 'Share on Pinterest')}
      >
        <i className="fab fa-pinterest-p"></i>
      </PinterestButton>
      
      <EmailButton 
        href={emailUrl}
        aria-label={t('share.email', 'Share via Email')}
      >
        <i className="fas fa-envelope"></i>
      </EmailButton>
    </Container>
  );
};

export default ShareButtons;