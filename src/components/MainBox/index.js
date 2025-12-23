import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
  0% { content: "Full-Stack Developer"; }
  20% { content: "Mr. Vikash Yadav"; }
  40% { content: "Creative Thinker"; }
  60% { content: "Problem Solver"; }
  80% { content: "Mobile App Developer"; }
  100% { content: "Passionate Coder"; }
`;

const RotatingText2 = styled.p`
  color: red; /* Set the color here */

  &::after {
    content: "";
    animation: ${rotateText} 10s linear infinite;
  }
`;

const MainBox = () => {
  const handlSayHello = () => {
    const message = "Hello!";
    const phoneNumber = "7698661812";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <StyledMainBox id="home">
        <div
          className="flex justify-center items-center p-40 text-center"
          style={{
            background: "linear-gradient(to left, white 50%, #e6e1e1 50%)",
          }}
        >
          <div className="text-xl text-gray-700 px-10">
            <h1
              style={{
                fontFamily: "Arial, sans-serif",
                letterSpacing: "0.2em",
                fontWeight: "800",
              }}
              className="text-m font-semibold mb-4 text-red-600"
            >
              HEY! I AM
            </h1>
            <RotatingText2
              style={{ fontFamily: "Arial, sans-serif", fontWeight: "700" }}
              className="md:text-6xl text-5xl mb-0"
            ></RotatingText2>
            <RotatingText className="mb-8 font-semibold"></RotatingText>
            <Button
              className="py-3 px-6 border border-solid border-1 border-red-600 bg-red-600 text-white hover:bg-white hover:text-gray-700 transition-all duration-500"
              startIcon={<WhatsAppIcon />}
              label="Say Hello!"
              onClick={handlSayHello}
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
