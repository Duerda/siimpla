import React from 'react';
import styled from 'styled-components';

// Define Styled Components using refined CSS Variables
const AppFooter = styled.footer`
  background-color: var(--color-primary-dark); /* Use Dark Indigo background */
  color: var(--color-white); /* White text */
  text-align: center;
  padding: 1.5rem 1rem; /* Adjusted padding */
  margin-top: auto; /* Push footer to the bottom */
  font-size: 0.85rem;
  font-family: 'Inter', sans-serif;

  p {
    color: var(--color-primary-very-light); /* Use Very Light Indigo for text */
    opacity: 0.9; /* Slightly less transparent */
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    font-size: 0.75rem;
  }
`;

// Footer Component using Refined Styled Components
const Footer = () => {
  return (
    <AppFooter>
      <p>© 2025 siimpla. Todos os direitos reservados.</p>
    </AppFooter>
  );
};

export default Footer;

