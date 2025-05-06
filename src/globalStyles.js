/* src/globalStyles.js */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Variables - Refined Palette & Styles */
  :root {
    /* Core Colors */
    --color-white: #FFFFFF;
    --color-black: #1A1A1A; /* Slightly deeper black for better contrast */
    --color-primary-dark: #1A237E; /* Dark Indigo Blue */
    --color-primary-medium: #303F9F; /* Medium Indigo Blue */
    --color-primary-light: #5C6BC0; /* Lighter Indigo */
    --color-primary-very-light: #C5CAE9; /* Very Light Indigo for subtle accents/backgrounds */

    /* Grays */
    --color-gray-background: #F7F8FC; /* Slightly cooler light gray */
    --color-gray-border: #EAEBF0; /* Softer border color */
    --color-gray-medium: #6E7A8A; /* Medium gray for secondary text */
    --color-gray-dark: #424750; /* Darker gray for text */

    /* Feedback Colors */
    --color-error: #D32F2F;
    --color-error-bg: #FFEBEE;
    --color-success: #388E3C;
    --color-success-bg: #E8F5E9;

    /* Gradients */
    --gradient-primary: linear-gradient(135deg, var(--color-primary-medium) 0%, var(--color-primary-dark) 100%);
    --gradient-primary-hover: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary-medium) 100%);
    /* New subtle gradient for backgrounds or accents */
    --gradient-subtle: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(247, 248, 252, 0.5) 100%);

    /* Shadows - Refined for more subtlety */
    --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 8px 25px rgba(0, 0, 0, 0.08);
    /* Focus Shadow */
    --shadow-focus: 0 0 0 3px rgba(var(--color-primary-medium-rgb, 48, 63, 159), 0.3);

    /* Transitions */
    --transition-fast: 0.15s ease-out;
    --transition-medium: 0.25s ease-out;
    --transition-slow: 0.4s ease-out;

    /* Border Radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;

    /* Header Height */
    --header-height: 70px;

    /* Add RGB versions for rgba usage */
    --color-primary-medium-rgb: 48, 63, 159;
  }

  /* Basic Reset & Global Styles */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-white);
    color: var(--color-black);
    line-height: 1.6;
    padding-top: var(--header-height); /* Prevent overlap with fixed header */
    font-size: 16px; /* Base font size */
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    background-color: var(--color-gray-background);
    padding: 0.2em 0.4em;
    border-radius: var(--border-radius-sm);
    font-size: 0.9em;
  }

  a {
    color: var(--color-primary-medium);
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-primary-dark);
      text-decoration: none; /* Remove underline on hover by default */
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-black);
    font-weight: 600; /* Slightly less bold default */
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  h1 { font-size: 2.25rem; font-weight: 700; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.25rem; }
  h4 { font-size: 1.1rem; }

  /* Utility class for focus outline */
  .focus-visible:focus {
      outline: none;
      box-shadow: var(--shadow-focus);
  }

  /* Add smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Style scrollbars for a cleaner look (optional) */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-gray-background);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-gray-border);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray-medium);
  }
`;

export default GlobalStyle;

