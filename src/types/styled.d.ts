import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      accent: string;
      accentHover: string;
      success: string;
      warning: string;
      danger: string;
      background: string;
      backgroundAlt: string;
      text: string;
      textLight: string;
      border: string;
      borderLight: string;
      borderDark: string;
      [key: string]: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      baseFontSize?: string;
      headingFontFamily: string;
      headingFontWeight: number;
      headingLineHeight: number;
      baseLineHeight: number;
      [key: string]: string | number | undefined;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      [key: string]: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      [key: string]: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
      [key: string]: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      round: string;
      [key: string]: string;
    };
    transitions: {
      fast: string;
      medium: string;
      slow: string;
      short: string;
      long: string;
      [key: string]: string;
    };
    fontSizes: {
      small: string;
      body: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      [key: string]: string;
    };
    [key: string]: any;
  }
}