import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ensureString } from '../utils/i18n-helpers';
import { getAffiliateLink } from '../utils/affiliate-links';
// Import custom SVG icons
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  PinterestIcon, 
  YoutubeIcon 
} from '../components/ui/SocialIcons';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primaryDark};
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const FooterLogo = styled(Link)`
  font-family: ${props => props.theme.typography.headingFontFamily};
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  display: block;
`;

const FooterDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: ${props => props.theme.transitions.short};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const FooterHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.75rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: white;
    opacity: 0.8;
    transition: ${props => props.theme.transitions.short};
    
    &:hover {
      opacity: 1;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsletterInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: ${props => props.theme.borderRadius.small};
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const NewsletterButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
  padding: 0.75rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${props => props.theme.transitions.short};
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
  }
`;

const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.7;
  
  p {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: white;
    text-decoration: underline;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
    // Reset form - use correct typing
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <FooterContainer>
      <FooterInner>
        <FooterGrid>
          <FooterColumn>
            <FooterLogo to="/">
              {ensureString(t, 'footer.logo', 'Travel Recommender')}
            </FooterLogo>
            <FooterDescription>
              {ensureString(t, 'footer.description', 'Discover amazing destinations around the world with our expert travel recommendations and guides. Plan your perfect trip with us.')}
            </FooterDescription>
            <SocialLinks>
              <SocialLink 
                href={getAffiliateLink('social', 'facebook', 'footer')} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </SocialLink>
              <SocialLink 
                href={getAffiliateLink('social', 'twitter', 'footer')} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </SocialLink>
              <SocialLink 
                href={getAffiliateLink('social', 'instagram', 'footer')} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </SocialLink>
              <SocialLink 
                href={getAffiliateLink('social', 'pinterest', 'footer')} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </SocialLink>
              <SocialLink 
                href={getAffiliateLink('social', 'youtube', 'footer')} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>
              {ensureString(t, 'footer.quickLinks', 'Quick Links')}
            </FooterHeading>
            <FooterLinks>
              <FooterLink>
                <Link to="/">{ensureString(t, 'footer.home', 'Home')}</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/destinations">{ensureString(t, 'footer.destinations', 'Destinations')}</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/blog">{ensureString(t, 'footer.blog', 'Blog')}</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/about">{ensureString(t, 'footer.about', 'About Us')}</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/contact">{ensureString(t, 'footer.contact', 'Contact')}</Link>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>
              {ensureString(t, 'footer.travelServices', 'Travel Services')}
            </FooterHeading>
            <FooterLinks>
              <FooterLink>
                <a 
                  href={getAffiliateLink('footer', 'link', 'flights', {program: 'flights'})} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {ensureString(t, 'footer.flights', 'Flight Booking')}
                </a>
              </FooterLink>
              <FooterLink>
                <a 
                  href={getAffiliateLink('footer', 'link', 'hotels', {program: 'hotels'})} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {ensureString(t, 'footer.hotels', 'Hotels')}
                </a>
              </FooterLink>
              <FooterLink>
                <a 
                  href={getAffiliateLink('footer', 'link', 'activities', {program: 'activities'})} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {ensureString(t, 'footer.activities', 'Activities & Tours')}
                </a>
              </FooterLink>
              <FooterLink>
                <a 
                  href={getAffiliateLink('footer', 'link', 'travel-insurance')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {ensureString(t, 'footer.insurance', 'Travel Insurance')}
                </a>
              </FooterLink>
              <FooterLink>
                <a 
                  href={getAffiliateLink('footer', 'link', 'car-rentals')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {ensureString(t, 'footer.carRentals', 'Car Rentals')}
                </a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>
              {ensureString(t, 'footer.newsletter', 'Newsletter')}
            </FooterHeading>
            <FooterDescription>
              {ensureString(t, 'footer.newsletterDesc', 'Subscribe to our newsletter for travel tips, destination guides, and exclusive deals.')}
            </FooterDescription>
            <NewsletterForm onSubmit={handleSubmit}>
              <NewsletterInput 
                type="email" 
                placeholder={ensureString(t, 'footer.emailPlaceholder', 'Your email address')}
                required
              />
              <NewsletterButton type="submit">
                {ensureString(t, 'footer.subscribe', 'Subscribe')}
              </NewsletterButton>
            </NewsletterForm>
          </FooterColumn>
        </FooterGrid>
        
        <FooterBottom>
          <p>
            © {currentYear} {ensureString(t, 'footer.copyright', 'Travel Recommender. All rights reserved.')}
          </p>
          <p>
            <Link to="/privacy">{ensureString(t, 'footer.privacy', 'Privacy Policy')}</Link> | 
            <Link to="/terms">{ensureString(t, 'footer.terms', 'Terms of Service')}</Link>
          </p>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;