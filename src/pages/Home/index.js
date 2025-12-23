import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainBox from '../../components/MainBox';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Works from './Works';
import Blog from './Blog';
import ChatbotButton from '../../components/ChatbotButton';
import AIChatInterface from '../../components/AIChatInterface';

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  return (
    <>
      <Header />
      <MainBox />
      <About />
      <Service />
      <Works />
      <Blog />
      <Contact />
      <Footer />
      
      <ChatbotButton onToggleChat={toggleChat} />
      
      {isChatOpen && (
        <AIChatInterface onClose={toggleChat} />
      )}
    </>
  );
}

export default Home;