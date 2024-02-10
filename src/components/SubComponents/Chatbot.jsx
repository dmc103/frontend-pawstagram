import { useState } from "react";
import axios from "axios";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello there human, how can I make your day PawTastic?",
      sender: "Petpal",
      direction: "incoming",
      avatar: "../../assets/petpal.png",
    },
  ]);

  const [typing, setTyping] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(true);

  if (!isChatVisible) return null;

  const handleExit = () => {
    setIsChatVisible(false);
    history.back();
  };

  const handleSend = async (messageText) => {
    const userMessage = {
      message: messageText,
      sender: "user",
      direction: "outgoing",
    };

    //to add the user's message to the chat
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    //typing indicator for Petpal
    setTyping(true);

    try {
      const response = await axios.post(`${API_URL}/chatbot`, {
        message: messageText,
      });

      const PetpalResponse = {
        message: response.data.choices[0].message.content,
        sender: "Petpal",
        direction: "incoming",
      };

      //add Petpal's response to the chat
      setMessages((prevMessages) => [...prevMessages, PetpalResponse]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setTyping(false);
  };

  return (
    <div className="chat-overlay">
      {isChatVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div
            style={{ position: "relative", height: "500px", width: "500px" }}
          >
            <MainContainer>
              <ChatContainer>
                <MessageList
                  typingIndicator={
                    typing ? (
                      <TypingIndicator content="Petpal is typing" />
                    ) : null
                  }
                >
                  {messages.map((message, index) => {
                    return (
                      <Message
                        key={index}
                        model={{
                          message: message.message,
                          sentTime: "Just now",
                          sender: message.sender,
                          direction: message.direction,
                          avatar: message.avatar,
                        }}
                      />
                    );
                  })}
                </MessageList>
                <MessageInput
                  placeholder="Type your message here"
                  onSend={handleSend}
                />
              </ChatContainer>
            </MainContainer>
            <div className="flex flex-col items-center">
              <button
                onClick={handleExit}
                className="w-1/2 flex justify-center py-3 px-4 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none"
              >
                End Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
