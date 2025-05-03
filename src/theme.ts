// Import raw DefaultTheme type just for reference
import { DefaultTheme } from 'styled-components';

// Define the theme without type constraints first
const themeObject = {
  colors: {
    primary: '#0066cc',
    primaryHover: '#0052a3',
    primaryLight: '#e6f0ff',
    primaryDark: '#0052a3',
    secondary: '#6c757d',
    accent: '#28a745',
    accentHover: '#218838',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
    background: '#ffffff',
    backgroundAlt: '#f8f9fa',
    text: '#333333',
    textLight: '#6c757d',
    border: '#dee2e6',
    borderLight: '#f1f1f1',
    borderDark: '#ced4da',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: '16px',
    baseFontSize: '16px',
    headingFontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    headingFontWeight: 600,
    headingLineHeight: 1.3,
    baseLineHeight: 1.5,
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
    xxl: '8rem',
  },
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%',
  },
  transitions: {
    fast: 'all 0.1s ease',
    medium: 'all 0.2s ease',
    slow: 'all 0.3s ease',
    short: 'all 0.1s ease',
    long: 'all 0.5s ease',
  },
  fontSizes: {
    small: '0.875rem',
    body: '1rem',
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1.25rem',
  },
};

// Force TypeScript to accept this as the DefaultTheme
const theme = themeObject as DefaultTheme;

export default theme;