import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the dots loading effect
const dotAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <Dots>
        <Dot className="dot" />
        <Dot className="dot" />
        <Dot className="dot" />
      </Dots>
      <LoaderText>Loading</LoaderText>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;  // Light background to contrast the red loader
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  background-color: #e74c3c;  // Red color for the dots
  border-radius: 50%;
  animation: ${dotAnimation} 1.5s infinite ease-in-out;
  
  /* The animation is applied with a delay to create the "dot sequence" effect */
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

const LoaderText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #e74c3c;  // Red color for the text to match the loader
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  animation: fadeIn 2s ease-out;  // Optional fade-in effect for text

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Loader;
