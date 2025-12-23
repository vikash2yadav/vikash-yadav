import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../Button';

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const RotatingText = styled.p`
  color: red; /* Set the color here */
  overflow: hidden; /* Hide overflowing text */

  &::after {
    content: "";
    display: inline-block;
    vertical-align: bottom;
    width: 0;
    height: 0.2em; /* Adjust based on font size */
    background-color: currentColor; /* Use same color as text */
    animation: ${typingAnimation} 3s steps(40, end) infinite;
  }
`;

const rotateText = keyframes`
  0% { content: "Web Designer"; }
  20% { content: "Vikash Yadav"; }
  40% { content: "Programmer"; }
  60% { content: "Android Developer"; }
  80% { content: "Web Developer"; }
  100% { content: "Coder"; }
`;

const RotatingText2 = styled.p`
  color: red; /* Set the color here */
  
  &::after {
    content: "";
    animation: ${rotateText} 10s linear infinite;
  }
`;

const MainBox = () => {
  return (
    <>
      <StyledMainBox id="home">
        <div className="flex justify-center items-center bg-gray-200 p-40 text-center" style={{ background: 'linear-gradient(to left, white 50%, #e6e1e1 50%)' }}>
          <div className="text-xl text-gray-700 px-10">
            <h1 style={{ fontFamily: "Arial, sans-serif", letterSpacing: "0.2em", fontWeight: "800" }} className="text-m font-semibold mb-4 text-red-600">HEY! I AM</h1>
            <RotatingText2 style={{ fontFamily: "Arial, sans-serif", fontWeight: "700"}} className="text-5xl mb-0"></RotatingText2>
            <RotatingText className="mb-8 font-semibold"></RotatingText>
            <Button
              className="py-3 px-6 border border-solid border-1 border-red-600 bg-red-600 text-white hover:bg-white hover:text-gray-700 transition-all duration-500"
              label="Say Hello !"
            />
          </div>
        </div>
      </StyledMainBox>
    </>
  );
};

const StyledMainBox = styled.div`
  @media (max-width: 768px) {

  }
`;

export default MainBox;
