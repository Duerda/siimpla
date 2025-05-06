import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FiArrowRight } from 'react-icons/fi'; // Add icon for button

// Keyframes for animations (keep existing)
const fadeInScaleUp = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const slideUpFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components for Home page using refined CSS Variables
const HomeContainer = styled.main` /* Use main for semantic HTML */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 1.5rem 5rem; /* Add more bottom padding */
  min-height: calc(100vh - var(--header-height) - 100px); /* Adjust based on header/footer height */
  background-color: var(--color-white);
`;

const HeroSection = styled.section` /* Use section for semantic HTML */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5rem; /* Increased space below hero */
  max-width: 700px; /* Constrain width */
  animation: ${fadeInScaleUp} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
`;

const HomeLogo = styled.img`
  max-width: 140px; /* Slightly smaller */
  height: auto;
  margin-bottom: 2rem;
  transition: transform var(--transition-medium);

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    max-width: 110px;
  }
  @media (max-width: 480px) {
    max-width: 90px;
  }
`;

const HomeTagline = styled.h1`
  font-size: 2.8rem; /* Larger tagline */
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: var(--color-black);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HomeDescription = styled.p`
  font-size: 1.15rem;
  color: var(--color-gray-medium);
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`;

// Refined About section
const AboutSection = styled.section`
  margin-bottom: 5rem; /* Increased space below */
  padding: 3.5rem 2.5rem;
  background: var(--gradient-subtle), var(--color-white); /* Use subtle gradient */
  width: 100%;
  max-width: 950px; /* Wider */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: var(--border-radius-lg); /* Use global radius */
  box-shadow: var(--shadow-md); /* Use refined shadow */
  border: 1px solid var(--color-gray-border);
  /* Apply animation - waits 0.3s after page load */
  animation: ${slideUpFadeIn} 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s backwards;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
    padding: 3rem 2rem;
  }
  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2rem; /* Use global h2 size */
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  color: var(--color-gray-dark);
  max-width: 750px; /* Wider text */
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

// Refined Login Button
const HomeLoginButton = styled.button`
  display: inline-flex; /* Align icon and text */
  align-items: center;
  justify-content: center;
  gap: 0.7rem; /* Increased gap */
  background: var(--gradient-primary, var(--color-primary-dark));
  color: var(--color-white);
  border: none;
  padding: 0.9rem 2.2rem; /* Keep padding */
  border-radius: var(--border-radius-md);
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  transition: all var(--transition-medium);
  box-shadow: 0 4px 12px rgba(var(--color-primary-medium-rgb), 0.25);

  svg {
    transition: transform var(--transition-medium);
  }

  &:hover {
    background: var(--gradient-primary-hover, var(--color-primary-medium));
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(var(--color-primary-medium-rgb), 0.35);
    svg {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 3px 8px rgba(var(--color-primary-medium-rgb), 0.2);
  }

  /* Add focus state */
  &:focus-visible {
      outline: none;
      box-shadow: var(--shadow-focus);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1.05rem;
  }
  @media (max-width: 480px) {
    padding: 0.7rem 1.8rem;
    font-size: 1rem;
  }
`;

// Home Component using Refined Styled Components
const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HomeLogo src="/logo.png" alt="siimpla logo" />
        <HomeTagline>Facilitando o seu dia, de forma simples.</HomeTagline>
        <HomeDescription>
          Descubra nossas ferramentas online rápidas e fáceis de usar, projetadas para simplificar suas tarefas diárias.
        </HomeDescription>
        <Link to="/login">
          <HomeLoginButton>
            Começar Agora <FiArrowRight size={20} />
          </HomeLoginButton>
        </Link>
      </HeroSection>

      <AboutSection>
        <AboutTitle>Sobre a siimpla</AboutTitle>
        <AboutText>
          Na siimpla, acreditamos que a tecnologia deve simplificar a vida, não complicá-la. Nossa missão é oferecer um conjunto de ferramentas online intuitivas, eficientes e acessíveis que resolvem problemas do cotidiano rapidamente. Desde tarefas simples como criar uma lista de afazeres até necessidades mais específicas como gerar um QR Code, estamos aqui para tornar seu dia a dia mais produtivo, de forma simples e direta.
        </AboutText>
      </AboutSection>

      {/* Optional: Add another section here if desired, e.g., Features */}

    </HomeContainer>
  );
};

export default Home;

