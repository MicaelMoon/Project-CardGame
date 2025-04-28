// Spinner.tsx

import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animation for the spinning effect
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component for the spinner
const SpinnerWrapper = styled.div<{ size: number }>`
  border: 4px solid #f3f3f3; /* light gray */
  border-top: 4px solid #3498db; /* blue color */
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  animation: ${spin} 2s linear infinite;
`;

export const Spinner: React.FC<{ size: number }> = ({ size }) => {
  return <SpinnerWrapper size={size} />;
};