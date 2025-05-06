import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

// Keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

// Styled Components using CSS Variables
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 140px); /* Adjust based on header/footer + main padding */
  padding: 3rem 1rem;
  background-color: var(--color-white);
`;

const LoginForm = styled.form`
  background-color: var(--color-white); /* White form background */
  padding: 3rem 2.5rem; /* Increased padding */
  border-radius: 12px; /* More rounded */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1); /* Enhanced shadow */
  width: 100%;
  max-width: 420px; /* Slightly wider */
  text-align: center;
  animation: ${fadeIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;

  @media (max-width: 480px) {
    padding: 2.5rem 1.8rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 2rem; /* Increased margin */
  color: var(--color-black);
  font-weight: 700; /* Bolder */
  font-size: 1.8rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.8rem; /* Increased margin */
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.6rem; /* Increased margin */
  color: var(--color-gray-medium);
  font-weight: 500;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem; /* Adjusted padding */
  border: 1px solid var(--color-gray-border);
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  background-color: var(--color-gray-bg); /* Light background for input */

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px rgba(92, 158, 255, 0.25);
    background-color: var(--color-white);
  }
`;

const SubmitButton = styled.button`
  background: var(--gradient-primary, var(--color-primary)); /* Use gradient */
  color: var(--color-white);
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 600;
  width: 100%;
  font-family: 'Inter', sans-serif;
  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  margin-top: 1.5rem;
  box-shadow: 0 5px 15px rgba(92, 158, 255, 0.3);

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 7px 18px rgba(92, 158, 255, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 3px 8px rgba(92, 158, 255, 0.25);
  }

  @media (max-width: 480px) {
    padding: 0.9rem 1.2rem;
    font-size: 1rem;
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-error);
  background-color: var(--color-error-bg);
  border: 1px solid var(--color-error);
  padding: 0.9rem;
  border-radius: 8px;
  margin-bottom: 1.8rem;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
  animation: ${fadeIn} 0.3s ease-out;
`;

// Login Component using Styled Components
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Simulated Login Logic
    const fakeJwtToken = `fake-jwt-token-for-${email}-${Date.now()}`;
    const userData = { name: email.split('@')[0] || 'Usuário' };

    try {
      login(fakeJwtToken, userData);
      navigate('/dashboard');
    } catch (err) {
      setError('Falha no login. Tente novamente.');
      console.error('Login error:', err);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Entrar</SubmitButton>
        {/* TODO: Add link to Sign-up later if needed */}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
