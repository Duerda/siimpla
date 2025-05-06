import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { QRCodeCanvas } from 'qrcode.react';
import { FiDownload } from 'react-icons/fi';

// Keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
`;

// Styled Components using CSS Variables
const GeneratorContainer = styled.div`
  padding: 3rem 1.5rem;
  max-width: 550px; /* Slightly wider for QR code */
  margin: 2rem auto; /* Add top margin */
  background-color: var(--color-white);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  animation: ${fadeIn} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  font-family: 'Inter', sans-serif;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  color: var(--color-black);
  font-weight: 700;
  font-size: 1.8rem;
`;

const InputArea = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  color: var(--color-gray-medium);
  font-weight: 500;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid var(--color-gray-border);
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  background-color: var(--color-gray-bg);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px rgba(92, 158, 255, 0.25);
    background-color: var(--color-white);
  }
`;

const QRCodeDisplay = styled.div`
  margin-top: 2rem;
  display: inline-block; /* Center the canvas */
  padding: 1rem;
  background-color: var(--color-white);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.4s ease-out;
`;

const DownloadButton = styled.button`
  background: var(--gradient-primary, var(--color-primary));
  color: var(--color-white);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  margin-top: 1.5rem;
  display: inline-flex; /* Align icon and text */
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 4px 12px rgba(92, 158, 255, 0.3);

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(92, 158, 255, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 2px 6px rgba(92, 158, 255, 0.25);
  }

  &:disabled {
    background-color: var(--color-gray-light);
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
    transform: none;
  }
`;

// QrGenerator Component
const QrGenerator = () => {
  const [text, setText] = useState('');
  const qrRef = useRef(null);

  const handleDownload = () => {
    if (!qrRef.current || !text) return;

    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream'); // Prompt download
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <GeneratorContainer>
      <Title>Gerador de QR Code</Title>
      <InputArea>
        <Label htmlFor="qrText">Texto ou URL para gerar o QR Code:</Label>
        <Input
          type="text"
          id="qrText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite aqui..."
          aria-label="Texto para QR Code"
        />
      </InputArea>

      {text && (
        <>
          <QRCodeDisplay ref={qrRef}>
            <QRCodeCanvas
              value={text}
              size={200} // Adjust size as needed
              bgColor={getComputedStyle(document.documentElement).getPropertyValue('--color-white').trim() || '#ffffff'} // Use CSS variable
              fgColor={getComputedStyle(document.documentElement).getPropertyValue('--color-black').trim() || '#000000'} // Use CSS variable
              level={'L'} // Error correction level
              includeMargin={true}
            />
          </QRCodeDisplay>
          <DownloadButton onClick={handleDownload} disabled={!text}>
            <FiDownload size={18} /> Download PNG
          </DownloadButton>
        </>
      )}
    </GeneratorContainer>
  );
};

export default QrGenerator;
