import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import { aboutUsData, educationDetails } from "../../../constant/sampleData";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const About = () => {
const [isVisible, setIsVisible] = useState(false);
const [typedText, setTypedText] = useState("");
const [hasTyped, setHasTyped] = useState(false);
const [openIndex, setOpenIndex] = useState(null);
const title = "About Me";

// Handle CV Download
const handleDownload = () => {
  const cvUrl = "./Hire_me.pdf";
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Vikash_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Typing effect
useEffect(() => {
  if (isVisible && !hasTyped) {
    let index = 0;
    const type = () => {
      if (index <= title.length) {
        setTypedText(title.slice(0, index));
        index++;
        setTimeout(type, 120);
      } else {
        setHasTyped(true);
      }
    };
    type();
  }
}, [isVisible, hasTyped]);

// Detect scroll visibility
useEffect(() => {
  const handleScroll = () => {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 500);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
  <StyledDiv id="about" isVisible={isVisible}>
    <h1 className="text-5xl mb-4 text-center text-gray-700 font-semibold font-serif animate-on-scroll">
      {typedText}
      <span className="blinking-cursor">|</span>
    </h1>

    <div className="w-full h-1 mb-20 flex justify-center">
      <div className="w-10 h-1 bg-red-700 mb-20 text-center rounded-lg animate-on-scroll"></div>
    </div>

    <div className="mb-20 md:mx-40">
      {aboutUsData?.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="mb-6 border-b border-gray-200 pb-4 transition-all duration-300"
          >
            <div
              className="flex items-center cursor-pointer animate-on-scroll"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-xl font-bold mr-3 text-red-600">
                {isOpen ? <RemoveIcon /> : <AddIcon />}
              </span>
              <h1
                className="text-m font-semibold"
                style={{ letterSpacing: "2px" }}
              >
                {item?.title}
              </h1>
            </div>

            {isOpen && (
              <div className="mt-4 ml-7 animate-on-scroll">
                <p className="mb-4 text-gray-500">
                  {item?.intro && (
                    <span className="text-gray-500 font-semibold mr-2">
                      {item?.intro}
                    </span>
                  )}
                  {item?.description}
                </p>
                <p className="text-gray-500">{item?.sub_description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
    {/* <div className="mb-20">
      {educationDetails?.map((item, index) => (
        <details
          key={index}
          className="border-b-1 border-gray-300 mb-2 p-4 shadow-md bg-gray-50 animate-on-scroll"
        >
          <summary className="font-semibold text-m text-red-600">
            {item?.title}
          </summary>
          <p className="mt-2 pl-4 py-2 text-m text-gray-500">
            <span className="font-semibold text-gray-700">
              {item?.schoolName}
            </span>{" "}
            - {item?.description}
          </p>
          <p className="pl-4 py-2 text-m text-gray-500">{item?.detail}</p>
        </details>
      ))}
    </div> */}

    {/* Projects */}
    <h1 className="text-xl md:mx-40 font-semibold animate-on-scroll">
      <span style={{ color: "red" }}>4</span> Projects completed
    </h1>

    {/* Download CV Button */}
    <Button
      variant="outlined"
      className="mt-5 md:mx-40 py-4 px-10 border text-gray-700 border-solid border-1 border-red-700 bg-white hover:bg-red-600 hover:text-white animate-on-scroll"
      style={{ transition: "all 0.5s" }}
      label="Download CV"
      onClick={handleDownload}
    />
  </StyledDiv>
);
};

// Styled Component
const StyledDiv = styled.div`
width: 100%;
height: auto;
background-color: #fff;
padding: 200px 100px;
opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
transform: ${({ isVisible }) =>
  isVisible ? "translateY(0px)" : "translateY(40px)"};
transition: opacity 0.8s, transform 1s;

@media (max-width: 400px) {
  padding: 100px 40px;
}

.blinking-cursor {
  font-weight: 100;
  font-size: 30px;
  color: red;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;

export default About;


