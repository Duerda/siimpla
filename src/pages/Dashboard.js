import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
// Use appropriate icons
import { FiLogOut, FiTool, FiList, FiDollarSign, FiGrid, FiImage, FiEdit, FiClock, FiDivideSquare, FiMaximize, FiLock } from 'react-icons/fi';

// Keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const cardFadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

// Styled Components using refined CSS Variables
const DashboardContainer = styled.main` /* Use main */
  padding: 3rem 1.5rem 4rem; /* Adjusted padding */
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} var(--transition-medium) ease-out;
  font-family: 'Inter', sans-serif;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem; /* Increased margin */
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-gray-border);

  @media (max-width: 600px) { /* Adjusted breakpoint */
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const WelcomeTitle = styled.h2`
  color: var(--color-black);
  font-weight: 600; /* Use global h2 weight */
  font-size: 1.75rem; /* Use global h2 size */

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

// Use BaseButton style from Header for consistency (or define locally if preferred)
const LogoutButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  text-align: center;
  transition: all var(--transition-fast);
  background-color: var(--color-white);
  color: var(--color-gray-medium);
  border: 1px solid var(--color-gray-border);
  box-shadow: var(--shadow-sm);

  &:hover {
    background-color: var(--color-gray-background);
    color: var(--color-gray-dark);
    border-color: var(--color-gray-medium);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: var(--shadow-sm);
  }

  &:focus-visible {
      outline: none;
      box-shadow: var(--shadow-focus);
  }

  @media (max-width: 600px) {
    align-self: flex-end;
  }
`;

const ToolsIntro = styled.p`
  margin-bottom: 2.5rem; /* Increased margin */
  font-size: 1.1rem; /* Adjusted size */
  color: var(--color-gray-medium);
`;

// Refined Grid Layout
const ToolsGrid = styled.div`
  display: grid;
  /* Adjust minmax for better fit, e.g., 3 columns on medium screens */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem; /* Increased gap */
`;

// Refined Tool Card
const ToolCard = styled(Link)`
  background: var(--color-white);
  border: 1px solid var(--color-gray-border);
  border-radius: var(--border-radius-lg);
  padding: 2rem 1.5rem;
  text-align: center;
  transition: transform var(--transition-medium), box-shadow var(--transition-medium);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  /* Staggered animation for cards */
  opacity: 0;
  animation: ${cardFadeIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: ${props => props.index * 0.08}s; /* Stagger animation based on index */

  /* Subtle gradient overlay on hover - using primary color */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(var(--color-primary-medium-rgb), 0.08) 0%, rgba(var(--color-primary-medium-rgb), 0) 70%);
    opacity: 0;
    transition: opacity var(--transition-medium);
    border-radius: var(--border-radius-lg);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.99);
    box-shadow: var(--shadow-md);
  }

  /* Style for non-functional cards */
  &[data-functional="false"] {
    cursor: not-allowed;
    opacity: 0.6; /* Apply opacity directly */
    filter: grayscale(50%);
    &:hover {
      transform: none;
      box-shadow: var(--shadow-md);
      &::before {
        opacity: 0;
      }
    }
  }
`;

const ToolIcon = styled.div`
  font-size: 2.5rem; /* Larger icon */
  margin-bottom: 1rem;
  color: var(--color-primary-medium); /* Use medium indigo */
  transition: transform var(--transition-medium);

  ${ToolCard}:hover & {
    transform: scale(1.1);
  }
`;

const ToolName = styled.h3`
  font-size: 1.1rem; /* Adjusted size */
  font-weight: 600;
  color: var(--color-gray-dark);
  margin-bottom: 0.3rem; /* Space before subtitle */
`;

const ToolSubtitle = styled.small`
  color: var(--color-gray-medium);
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

// Dashboard Component using Refined Styled Components
const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Tools list with functional status
  const tools = [
    { name: 'Removedor de Fundo', path: '/remove-background', icon: <FiImage />, functional: false },
    { name: 'Lista de Tarefas', path: '/todo-list', icon: <FiList />, functional: true },
    { name: 'Conversor de Moedas', path: '/converter', icon: <FiDollarSign />, functional: true },
    { name: 'Gerador de QR Code', path: '/qr-generator', icon: <FiGrid />, functional: true },
    { name: 'Organizador Financeiro', path: '#', icon: <FiTool />, functional: false },
    { name: 'Cronômetro Online', path: '#', icon: <FiClock />, functional: false },
    { name: 'Calculadora Simples', path: '#', icon: <FiDivideSquare />, functional: false },
    { name: 'Conversor de Unidades', path: '#', icon: <FiMaximize />, functional: false },
    { name: 'Gerador de Senhas', path: '#', icon: <FiLock />, functional: false },
    { name: 'Bloco de Notas Online', path: '#', icon: <FiEdit />, functional: false },
  ];

  return (
    <DashboardContainer>
      <DashboardHeader>
        <WelcomeTitle>Bem-vindo(a), {user ? user.name : 'Usuário'}!</WelcomeTitle>
        <LogoutButton onClick={handleLogout}>
          <FiLogOut size={16} /> Logout
        </LogoutButton>
      </DashboardHeader>
      <ToolsIntro>Explore nossas ferramentas:</ToolsIntro>
      <ToolsGrid>
        {tools.map((tool, index) => (
          <ToolCard
            to={tool.functional ? tool.path : '#'}
            key={tool.name}
            index={index} // Pass index for animation delay
            data-functional={tool.functional} // Use data attribute for styling
            onClick={(e) => !tool.functional && e.preventDefault()} // Prevent navigation
          >
            <ToolIcon>{tool.icon}</ToolIcon>
            <ToolName>{tool.name}</ToolName>
            {!tool.functional && <ToolSubtitle>(Em breve)</ToolSubtitle>}
          </ToolCard>
        ))}
      </ToolsGrid>
    </DashboardContainer>
  );
};

export default Dashboard;

