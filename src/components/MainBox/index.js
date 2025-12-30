import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../Button";
// import profileImg from "../../vikash.png";

const words = [
  "Vikash Yadav",
  "Developer",
  "Programmer",
 // "Android Developer",
  "Coder",
];

// cursor blink
const blink = keyframes`
  50% { opacity: 0; }
`;

const TypingText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #dc2626;
  display: inline-flex;
  align-items: center;

  span {
    margin-left: 5px;
    width: 2px;
    height: 1em;
    background: currentColor;
    animation: ${blink} 1s infinite;
  }
`;

const MainBox = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSayHello = () => {
    const message = "Hello!";
    const phoneNumber = "7698661812";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-white to-gray-200 px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto items-center">
        
        {/* TEXT */}
        <div>
          <h1 className="text-sm tracking-widest font-extrabold text-red-600 mb-4">
            HEY! I AM
          </h1>

          <TypingText>
            {words[index]}
            <span />
          </TypingText>

          <p className="text-gray-600 mt-4 max-w-md">
            I build modern, scalable web applications using React, Node.js and modern tools.
          </p>

          <Button
            className="mt-8 py-3 px-6 border border-red-600 bg-red-600 text-white hover:bg-white hover:text-gray-700 transition-all duration-300"
            label="Say Hello!"
            onClick={handleSayHello}
          />
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
         {/* IMAGE */}
<div className="flex justify-center">
  <div className="relative w-100 h-90 rounded-full overflow-hidden group border-4 border-red-600 shadow-lg">
    
    {/* IMAGE */}
    <img
      src="/vikash.png"
      alt="Vikash Yadav"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
      <span className="text-white text-3xl font-bold tracking-widest animate-pulse">
        Js Developer
      </span>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default MainBox;
