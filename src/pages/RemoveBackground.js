import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiImage, FiAlertTriangle } from 'react-icons/fi'; // Import icons

// Keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
`;

// Styled Components using CSS Variables
const PlaceholderContainer = styled.div`
  padding: 3rem 1.5rem;
  max-width: 600px;
  margin: 2rem auto;
  background-color: var(--color-white);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  animation: ${fadeIn} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  font-family: 'Inter', sans-serif;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--color-black);
  font-weight: 700;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: var(--color-gray-medium);
  line-height: 1.7;
  margin-top: 1rem;
`;

const IconWrapper = styled.div`
    color: var(--color-gray-light);
    font-size: 3rem;
    margin-bottom: 1rem;
`;

// Placeholder Component for RemoveBackground
const RemoveBackground = () => {
  return (
    <PlaceholderContainer>
      <Title><FiImage size={28} /> Removedor de Fundo</Title>
      <IconWrapper>
          <FiAlertTriangle />
      </IconWrapper>
      <Message>
        Esta ferramenta ainda não está disponível.
        <br />
        Estamos trabalhando para implementá-la em breve!
      </Message>
    </PlaceholderContainer>
  );
};

export default RemoveBackground;
