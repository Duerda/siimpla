import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiDollarSign, FiArrowRight } from 'react-icons/fi'; // Import icons

// Keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
`;

// Styled Components using CSS Variables
const ConverterContainer = styled.div`
  padding: 3rem 1.5rem;
  max-width: 550px;
  margin: 2rem auto;
  background-color: var(--color-white);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  animation: ${fadeIn} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  font-family: 'Inter', sans-serif;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2.5rem;
  color: var(--color-black);
  font-weight: 700;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

const ConverterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Increased gap */
  margin-bottom: 2rem;
  background-color: var(--color-gray-bg);
  padding: 2rem;
  border-radius: 10px;
`;

const FormGroup = styled.div`
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  color: var(--color-gray-medium);
  margin-bottom: 0.6rem;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid var(--color-gray-border);
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  background-color: var(--color-white); /* White input background */

  /* Hide spinner buttons on number input */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px rgba(92, 158, 255, 0.25);
  }
`;

const ConvertButton = styled.button`
  background: var(--gradient-primary, var(--color-primary));
  color: var(--color-white);
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
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
`;

const ResultDisplay = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(92, 158, 255, 0.05) 0%, rgba(122, 174, 255, 0.1) 100%); /* Subtle gradient background */
  border: 1px solid rgba(92, 158, 255, 0.2);
  border-radius: 10px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const ResultLabel = styled.p`
  margin-bottom: 0.8rem;
  color: var(--color-gray-medium);
  font-size: 1rem;
`;

const ResultValue = styled.h3`
  font-size: 2.5rem; /* Larger result */
  color: var(--color-primary-dark); /* Darker Blue */
  margin-bottom: 0.8rem;
  font-weight: 700;
`;

const ExchangeRateInfo = styled.small`
  font-size: 0.9rem;
  color: var(--color-gray-medium);
`;

const ErrorMessage = styled.p`
  color: var(--color-error);
  background-color: var(--color-error-bg);
  border: 1px solid var(--color-error);
  padding: 0.9rem;
  border-radius: 8px;
  margin-top: 2rem;
  font-size: 0.95rem;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-out;
`;

// Converter Component using Styled Components
const Converter = () => {
  const [realValue, setRealValue] = useState('');
  const [dollarValue, setDollarValue] = useState(null);
  const [error, setError] = useState('');

  const EXCHANGE_RATE = 5.15; // Simulated fixed exchange rate

  const handleConvert = () => {
    setError('');
    setDollarValue(null);
    const value = parseFloat(realValue);

    if (isNaN(value) || value < 0) {
      setError('Por favor, insira um valor numérico válido em Reais.');
      return;
    }

    const convertedValue = (value / EXCHANGE_RATE).toFixed(2);
    setDollarValue(convertedValue);
  };

  return (
    <ConverterContainer>
      <Title><FiDollarSign size={28} /> Conversor (BRL para USD)</Title>
      <ConverterForm>
        <FormGroup>
          <Label htmlFor="realInput">Valor em Reais (R$):</Label>
          <Input
            type="number"
            id="realInput"
            value={realValue}
            onChange={(e) => setRealValue(e.target.value)}
            placeholder="Ex: 100.50"
            step="0.01"
            aria-label="Valor em Reais"
          />
        </FormGroup>
        <ConvertButton onClick={handleConvert}>
          Converter <FiArrowRight size={18} />
        </ConvertButton>
      </ConverterForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {dollarValue !== null && (
        <ResultDisplay>
          <ResultLabel>Valor em Dólares (USD):</ResultLabel>
          <ResultValue>$ {dollarValue}</ResultValue>
          <ExchangeRateInfo>(Taxa de câmbio simulada: 1 USD = R$ {EXCHANGE_RATE})</ExchangeRateInfo>
        </ResultDisplay>
      )}
    </ConverterContainer>
  );
};

export default Converter;
