// components/AIChatInterface.js
import React, { useState, useEffect } from 'react';
import './chatbot.css'; 
import CloseIcon from '@mui/icons-material/Close';

// Define your suggested questions here (IDs are now unique!)
const SUGGESTED_QUESTIONS = [
  // Greetings & Professional Engagement
  { id: 1, text: "Hello, Vikash" },
  { id: 2, text: "Let's Work Together?" },
  { id: 3, text: "Best Of Luck" },
  
  // Core Portfolio Questions
  { id: 101, text: "What are your top 3 projects?" },
  { id: 102, text: "What technologies do you specialize in?" },
  { id: 103, text: "What is your most recent project?" },
  { id: 104, text: "Can you send me a link to your resume?" },
  { id: 105, text: "What kind of work are you looking for?" },
  { id: 106, text: "Do you use TypeScript or JavaScript?" },
  { id: 107, text: "What is the best way to contact you?" },
  { id: 108, text: "What are your preferred working hours?" },
  
  // Closings
  { id: 201, text: "Thank You, Bye" },
];


const AIChatInterface = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hello! I'm the AI assistant of Vikash. Select a quick action below." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Core function to handle sending any message (quick reply or typed)
  const sendMessage = async (messageText) => {
    if (isLoading) return;

    // 1. Add the user message to the chat history
    setMessages(prev => [...prev, { role: 'user', text: messageText }]);
    setIsLoading(true);

    // --- 2. Custom Logic / Simulated API Call ---
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      
      let finalResponse;
      const normalizedMessage = messageText.toLowerCase();

      // --- Custom Response Logic based on Quick Replies ---
      
      if (normalizedMessage.includes("hello, vikash")) {
          finalResponse = "Hello! Vikash is currently focused on his next opportunity. As his AI assistant, I can provide immediate answers about his skills and portfolio. How can I help?";
      } else if (normalizedMessage.includes("let's work together")) {
          finalResponse = "That's fantastic! Vikash is eager for new collaborative opportunities. Please use the 'Contact' page to send a detailed inquiry, and he will respond quickly.";
      } else if (normalizedMessage.includes("best of luck")) {
          finalResponse = "Thank you so much! Your kind wishes are appreciated. Is there anything else I can show you about the portfolio?";
      } else if (normalizedMessage.includes("top 3 projects")) {
          finalResponse = "My top projects are Project E-commerce (React/Node), Project Vehicle Rental System (Next.js/PostgreSQL), and cuurently working on Society Management System (SAS) ! You can find links in the 'Works' section.";
      } else if (normalizedMessage.includes("technologies")) {
          finalResponse = "Vikash specializes in the MERN stack: MongoDB, Express, React, and Node.js, with expertise in advanced JavaScript/TypeScript and cloud deployment.";
      } else if (normalizedMessage.includes("most recent project")) {
          finalResponse = "His most recent finished project is a real-time chat application built with Next.js, WebSockets, and a Serverless backend. Details are in the 'Works' section.";
      } else if (normalizedMessage.includes("resume")) {
          finalResponse = "Certainly! You can download Vikash's resume directly from the 'About' section, or contact him via the 'Contact' form for a personalized copy.";
      } else if (normalizedMessage.includes("work are you looking for")) {
          finalResponse = "Vikash is currently seeking a role as a Full-Stack or Frontend Developer, focusing on challenging projects in React/Next.js environments.";
      } else if (normalizedMessage.includes("typescript or javascript")) {
          finalResponse = "Vikash is highly proficient in both, but strongly prefers TypeScript for scalable applications to improve maintainability and catch bugs early.";
      } else if (normalizedMessage.includes("best way to contact you")) {
          finalResponse = "The fastest way to reach Vikash is through the 'Contact' form on this website or by connecting on LinkedIn (link in the footer).";
      } else if (normalizedMessage.includes("preferred working hours")) {
          finalResponse = "Vikash is flexible but typically follows a standard 9 AM - 5 PM schedule in the IST timezone, while always ensuring deadlines are met.";
      } else if (normalizedMessage.includes("thank you, bye") || normalizedMessage.includes("thank you") || normalizedMessage.includes("bye")) {
          // Add conversational closing
          finalResponse = "You're welcome! Feel free to click the chat button again if you have more questions. Have a great day!";
      } else {
          // Fallback response for custom typed questions
          // *** IMPORTANT: This is where your REAL AI API call (e.g., Gemini) would go ***
         finalResponse =
    "⚠️ I am currently limited to predefined questions.\n\n" +
    "Vikash is actively working on improving this feature.\n\n" +
    "👉 Please choose a question from the suggested options below to get an instant response.";
      }

      setMessages(prev => [...prev, { role: 'ai', text: finalResponse }]);
      
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting to the AI. Please try again later." }]);
      console.error("AI Chat Error:", error);
    } finally {
      setIsLoading(false);
    }
    // -----------------------------------------------------------------------
  };
  
  // Handles the form submission (typed message)
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    sendMessage(userMessage);
  };
  
  // Handles the quick reply button click
  const handleQuickReply = (questionText) => {
      sendMessage(questionText);
  };
  
  // Scrolls to bottom whenever messages change
  useEffect(() => {
    const chatBody = document.querySelector('.chat-body');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-window-overlay">
      <div className="chat-window">
        
        <div className="chat-header">
          <h3>Vikash's AI Assistant</h3>
          <button onClick={onClose} className="close-button">
            <CloseIcon />
          </button>
        </div>
        
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          {isLoading && <div className="message ai typing-indicator">...typing</div>}
        </div>

        {/* --- QUICK REPLY BUTTONS --- */}
        <div className="quick-replies-container">
          {SUGGESTED_QUESTIONS.map((q) => (
            <button 
              key={q.id} 
              className="quick-reply-button"
              onClick={() => handleQuickReply(q.text)}
              disabled={isLoading}
            >
              {q.text}
            </button>
          ))}
        </div>
        {/* --------------------------- */}
        
        <form className="chat-input-form" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Ask your own question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChatInterface;