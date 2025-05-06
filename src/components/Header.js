import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { FiLogIn, FiLogOut } from 'react-icons/fi'; // Add icons

// Keyframes
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled Components using refined CSS Variables from GlobalStyle
const AppHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gray-border); /* Use refined border color */
  z-index: 1000;
  padding: 0.5rem 0; /* Slightly reduced padding for a tighter look */
  animation: ${fadeIn} var(--transition-medium) ease-out;
  box-shadow: var(--shadow-sm); /* Use refined shadow */
  height: var(--header-height);
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  transition: transform var(--transition-fast);
  &:hover {
    transform: scale(1.05);
  }
`;

const HeaderLogo = styled.img`
  height: 40px; /* Adjusted height */
  width: auto;

  @media (max-width: 768px) {
    height: 35px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const AuthControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* Adjusted gap */
`;

const UserGreeting = styled.span`
  font-size: 0.9rem;
  color: var(--color-gray-medium);
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Base Button Style (Refined)
const BaseButton = styled.button`
  display: inline-flex; /* Align icon and text */
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: var(--border-radius-md); /* Use global radius */
  cursor: pointer;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  text-align: center;
  transition: all var(--transition-fast);
  border: 1px solid transparent; /* Add border for consistency */

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: var(--shadow-sm);
  }

  /* Add focus state */
  &:focus-visible {
      outline: none;
      box-shadow: var(--shadow-focus);
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

// Login Button Style (Refined)
const LoginButton = styled(BaseButton)`
  background: var(--gradient-primary, var(--color-primary-dark));
  color: var(--color-white);
  box-shadow: 0 3px 8px rgba(var(--color-primary-medium-rgb), 0.2);

  &:hover {
    background: var(--gradient-primary-hover, var(--color-primary-medium));
    box-shadow: 0 5px 12px rgba(var(--color-primary-medium-rgb), 0.3);
  }
`;

// Logout Button Style (Refined)
const LogoutButton = styled(BaseButton)`
  background-color: var(--color-white);
  color: var(--color-gray-medium);
  border: 1px solid var(--color-gray-border);

  &:hover {
    background-color: var(--color-gray-background);
    color: var(--color-gray-dark);
    border-color: var(--color-gray-medium);
  }
`;

// Header Component using Refined Styled Components
const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppHeader>
      <HeaderContent>
        <HeaderLogoLink to="/">
          <HeaderLogo src="/logo.png" alt="siimpla logo" />
        </HeaderLogoLink>
        <Navigation>
          {isAuthenticated ? (
            <AuthControls>
              {user && <UserGreeting>Olá, {user.name}!</UserGreeting>}
              <LogoutButton onClick={handleLogout}>
                <FiLogOut size={16} /> Logout
              </LogoutButton>
            </AuthControls>
          ) : (
            <Link to="/login">
              <LoginButton>
                <FiLogIn size={16} /> Login
              </LoginButton>
            </Link>
          )}
        </Navigation>
      </HeaderContent>
    </AppHeader>
  );
};

export default Header;

