import './chatbot.css'; 
import ChatIcon from '@mui/icons-material/Chat';

const ChatbotButton = ({ onToggleChat }) => {
  const handleClick = () => {
    if (onToggleChat) {
      onToggleChat();
    }
  };

  return (
    <button className="chatbot-button" onClick={handleClick}>
      <span className="button-text"><ChatIcon/> Chat</span>
    </button>
  );
};

export default ChatbotButton;