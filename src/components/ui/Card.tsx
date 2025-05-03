import styled, { css } from 'styled-components';

interface CardProps {
  padding?: string;
  elevation?: 'small' | 'medium' | 'large';
  hover?: boolean; // Added hover prop
}

const Card = styled.div<CardProps>`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.padding || props.theme.spacing.lg};
  box-shadow: ${props => {
    switch (props.elevation) {
      case 'small':
        return props.theme.shadows.small;
      case 'large':
        return props.theme.shadows.large;
      default:
        return props.theme.shadows.medium;
    }
  }};
  
  ${props => props.hover && css`
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${props.theme.shadows.large};
    }
  `}
`;

export default Card;