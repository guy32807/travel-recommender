import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  // Transient props with $ prefix (these won't be passed to DOM)
  $primary?: boolean;
  $large?: boolean;
  $small?: boolean;
  $fullWidth?: boolean;
  
  // Regular props without $ prefix (for backward compatibility)
  primary?: boolean;
  large?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  
  // Standard button props
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  
  // For usage with other components like Link
  as?: React.ElementType;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const ButtonBase = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => (props.$large || props.large)
    ? '0.8rem 2rem' 
    : (props.$small || props.small)
      ? '0.4rem 0.8rem' 
      : '0.6rem 1.2rem'
  };
  font-size: ${props => (props.$large || props.large)
    ? '1.1rem' 
    : (props.$small || props.small)
      ? '0.85rem' 
      : '1rem'
  };
  font-weight: 500;
  border-radius: ${props => props.theme.borderRadius.small};
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
  width: ${props => (props.$fullWidth || props.fullWidth) ? '100%' : 'auto'};
  
  background-color: ${props => (props.$primary || props.primary)
    ? props.theme.colors.primary 
    : 'transparent'
  };
  color: ${props => (props.$primary || props.primary)
    ? 'white' 
    : props.theme.colors.primary
  };
  border-color: ${props => (props.$primary || props.primary)
    ? 'transparent' 
    : props.theme.colors.primary
  };
  
  &:hover {
    background-color: ${props => (props.$primary || props.primary)
      ? props.theme.colors.primaryDark || props.theme.colors.primaryHover
      : props.theme.colors.primaryLight
    };
    border-color: ${props => (props.$primary || props.primary)
      ? 'transparent' 
      : props.theme.colors.primaryDark || props.theme.colors.primaryHover
    };
    color: ${props => (props.$primary || props.primary) ? 'white' : props.theme.colors.primaryDark || props.theme.colors.primaryHover};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Button: React.FC<ButtonProps> = ({ 
  // Convert regular props to transient props if needed
  primary, large, small, fullWidth,
  $primary, $large, $small, $fullWidth,
  ...rest 
}) => {
  // Combine both versions of props
  const finalProps = {
    $primary: $primary || primary,
    $large: $large || large,
    $small: $small || small,
    $fullWidth: $fullWidth || fullWidth,
    ...rest
  };
  
  return <ButtonBase {...finalProps} />;
};

export default Button;