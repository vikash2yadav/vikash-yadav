import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import { aboutUsData, educationDetails } from "../../../constant/sampleData";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleDownload = () => {
    const cvUrl = "./Hire_me.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Vikash_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 500); // Adjust the value as per your requirement
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <StyledDiv id="about" isVisible={isVisible}>
        <h1 className="text-5xl mb-4 text-center text-gray-700 font-semibold font-serif animate-on-scroll">
          About Me
        </h1>
        <div className="w-full h-1 mb-20 flex justify-center">
          <div className="w-10 h-1 bg-red-700 mb-20 text-center rounded-lg animate-on-scroll"></div>
        </div>

        {aboutUsData?.map((item) => (
          <>
            <h1
              className="text-m mb-10 font-semibold animate-on-scroll"
              style={{ letterSpacing: "2px" }}
            >
              {item?.title}
            </h1>

            <p className="mb-5 text-gray-500 animate-on-scroll">
              {item?.intro && (
                <span className="text-black font-semibold">
                  Hi, I'm Vikash Yadav! 🌟{" "}
                </span>
              )}
              {item?.description}
            </p>
            <p className="mb-10 text-gray-500 animate-on-scroll">
              {item?.sub_description}
            </p>
          </>
        ))}

        <div className="mb-20">
          {educationDetails?.map((item) => (
            <>
              <details className="border-b-1 border-gray-300 mb-2 p-4 shadow-md bg-gray-50 animate-on-scroll">
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
            </>
          ))}
        </div>

        <h1 className="text-xl font-semibold animate-on-scroll">
          <span style={{ color: "red" }}>4</span> Projects completed
        </h1>
        <Button
          variant="outlined"
          className="mt-5 py-4 px-10 border text-gray-700 border-solid border-1 border-red-700 bg-white hover:bg-red-600 hover:text-white animate-on-scroll"
          style={{ transition: "all 0.5s" }}
          label="Download CV"
          onClick={handleDownload}
        />
      </StyledDiv>
    </>
  );
};

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
`;

export default About;
