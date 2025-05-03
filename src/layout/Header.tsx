import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ensureString } from '../utils/i18n-helpers';
// Import custom SVG icons
import { MenuIcon, CloseIcon } from '../components/ui/SocialIcons';

const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${props => props.$scrolled ? 'white' : 'transparent'};
  box-shadow: ${props => props.$scrolled ? props.theme.shadows.small : 'none'};
  transition: all 0.3s ease;
  padding: ${props => props.$scrolled ? '0.75rem 0' : '1.5rem 0'};
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)<{ $scrolled: boolean }>`
  font-family: ${props => props.theme.typography.headingFontFamily};
  font-size: ${props => props.$scrolled ? '1.5rem' : '1.75rem'};
  font-weight: 700;
  color: ${props => props.$scrolled ? props.theme.colors.primary : 'white'};
  text-shadow: ${props => props.$scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)'};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.$scrolled ? props.theme.colors.primaryHover : props.theme.colors.primary};
  }
`;

const NavigationWrapper = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(Link)<{ $active: boolean; $scrolled: boolean }>`
  color: ${props => {
    if (props.$scrolled) {
      return props.$active ? props.theme.colors.primary : props.theme.colors.text;
    } else {
      return props.$active ? props.theme.colors.primary : 'white';
    }
  }};
  text-shadow: ${props => props.$scrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.3)'};
  font-weight: ${props => props.$active ? '600' : '400'};
  position: relative;
  transition: color 0.2s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button<{ $scrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${props => props.$scrolled ? props.theme.colors.text : 'white'};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  background-color: white;
  box-shadow: ${props => props.theme.shadows.large};
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  z-index: 200;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileMenuClose = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileNavItem = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: ${props => props.$active ? '600' : '400'};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 150;
`;

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when changing routes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
  
  // Handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Check if link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') {
      return false;
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <>
      <HeaderContainer $scrolled={scrolled}>
        <HeaderInner>
          <Logo to="/" $scrolled={scrolled}>
            {ensureString(t, 'header.logo', 'Travel Recommender')}
          </Logo>
          
          <NavigationWrapper>
            <Navigation>
              <NavItem to="/" $active={location.pathname === '/'} $scrolled={scrolled}>
                {ensureString(t, 'header.home', 'Home')}
              </NavItem>
              <NavItem to="/destinations" $active={isActive('/destinations')} $scrolled={scrolled}>
                {ensureString(t, 'header.destinations', 'Destinations')}
              </NavItem>
              <NavItem to="/blog" $active={isActive('/blog')} $scrolled={scrolled}>
                {ensureString(t, 'header.blog', 'Blog')}
              </NavItem>
              <NavItem to="/about" $active={isActive('/about')} $scrolled={scrolled}>
                {ensureString(t, 'header.about', 'About')}
              </NavItem>
            </Navigation>
          </NavigationWrapper>
          
          <MobileMenuButton 
            $scrolled={scrolled}
            onClick={toggleMenu}
            aria-label="Open Menu"
          >
            <MenuIcon />
          </MobileMenuButton>
        </HeaderInner>
      </HeaderContainer>
      
      <MobileMenu $isOpen={menuOpen}>
        <MobileMenuHeader>
          <Logo to="/" $scrolled={true}>
            {ensureString(t, 'header.logo', 'Travel Recommender')}
          </Logo>
          <MobileMenuClose 
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <CloseIcon />
          </MobileMenuClose>
        </MobileMenuHeader>
        
        <MobileNavigation>
          <MobileNavItem to="/" $active={location.pathname === '/'}>
            {ensureString(t, 'header.home', 'Home')}
          </MobileNavItem>
          <MobileNavItem to="/destinations" $active={isActive('/destinations')}>
            {ensureString(t, 'header.destinations', 'Destinations')}
          </MobileNavItem>
          <MobileNavItem to="/blog" $active={isActive('/blog')}>
            {ensureString(t, 'header.blog', 'Blog')}
          </MobileNavItem>
          <MobileNavItem to="/about" $active={isActive('/about')}>
            {ensureString(t, 'header.about', 'About')}
          </MobileNavItem>
        </MobileNavigation>
      </MobileMenu>
      
      <Overlay $isOpen={menuOpen} onClick={toggleMenu} />
    </>
  );
};

export default Header;