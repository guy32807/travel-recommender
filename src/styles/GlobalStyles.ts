import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.baseFontSize};
    line-height: ${props => props.theme.typography.baseLineHeight};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography.headingFontFamily};
    line-height: ${props => props.theme.typography.headingLineHeight};
    margin-top: 0;
    color: ${props => props.theme.colors.text};
  }
  
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: ${props => props.theme.colors.primaryHover};
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  main {
    min-height: 70vh;
  }
  
  /* Form styles */
  form {
    margin-bottom: 2rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input,
  textarea,
  select {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.small};
    font-family: inherit;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  button {
    cursor: pointer;
  }
`;