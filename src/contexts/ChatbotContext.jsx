import PropTypes from "prop-types";
import { useState, createContext, useEffect } from "react";

const ChatboxContext = createContext();

export const ChatboxProvider = ({ children }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  useEffect(() => {
    console.log("isChatVisible has updated:", isChatVisible);
  }, [isChatVisible]);

  const showChatbox = () => {
    console.log("showChatbox function called");
    setIsChatVisible(true);
  };
  const hideChatbox = () => setIsChatVisible(false);

  return (
    <ChatboxContext.Provider
      value={{ isChatVisible, showChatbox, hideChatbox }}
    >
      {children}
    </ChatboxContext.Provider>
  );
};

//validate the props
ChatboxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChatboxContext;
