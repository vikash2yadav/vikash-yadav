import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ServiceBox from '../../../components/ServiceBox';

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);

  const title = "My Services";

  // Typing effect (same as About)
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

  // Scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledDiv isVisible={isVisible} id="service">
      <h1
        style={{ fontSize: "40px" }}
        className="text-xl text-center mb-4 text-gray-700 font-serif font-semibold"
      >
        {typedText}
        <span className="blinking-cursor">|</span>
      </h1>

      <div className="w-full h-1 mb-8 flex justify-center">
        <div className="w-10 h-1 bg-red-700 mb-20 text-center rounded-lg"></div>
      </div>

      <p className="mb-20 text-center text-gray-400 text-m">
        These all are services, which is provided by me. if you want help, please contact me.
      </p>

      <ServiceContainer>
        <ServiceBox
          title="Web & Mobile Design"
          link="https://www.toptal.com/designers/e-commerce/ultimate-ecommerce-design-guide?utm_source=chatgpt.com"
          description="Designing clean, responsive, and user-friendly interfaces for web and mobile applications with a strong focus on usability and performance."
          logo="https://e7.pngegg.com/pngimages/227/326/png-clipart-website-development-mobile-app-development-application-software-web-application-web-design-web-design-logo.png"
        />

        <ServiceBox
          title="E-commerce Solutions"
          link="https://www.silverwebbuzz.com/blog/ecommerce-website-development/"
          description="Building secure and scalable e-commerce platforms with product management, user authentication, and payment integration."
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFag6YWZ5i97XfY_gc_fPPlaPvNxPv9FkD5NyCKYbZCg&s"
        />

        <ServiceBox
          title="Web Development"
          link="https://www.networksolutions.com/blog/tips-trustworthy-website/"
          description="Developing modern, high-performance web applications using React, Node.js, and REST APIs with clean and maintainable code."
          logo="https://i.pinimg.com/originals/ee/f5/ad/eef5addc3bf3c9a386ddf4d352c60272.jpg"
        />

      </ServiceContainer>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 200px 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0px)' : 'translateY(40px)'};
  transition: opacity 0.8s, transform 1s;

  @media (max-width: 400px) {
    padding: 100px 20px;
  }

  .blinking-cursor {
    font-weight: 100;
    font-size: 30px;
    color: red;
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Service;
