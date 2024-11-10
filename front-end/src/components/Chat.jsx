import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageList from './Messagelist'; // List of messages
import MessageInput from './Messageinput';  // Input for sending messages
import FileUpload from './Fileupload'; // Component for uploading files
import axiosInstance from '../../axiosinterceptors';

const ChatInterface = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  // Fetch messages when chatId changes or component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axiosInstance.get(`http://localhost:5000/chats/messages/${chatId}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, [chatId]);

  // Send a new message
  const sendMessage = async () => {
    try {
      await axiosInstance.post('http://localhost:5000/chats/message', {
        chatId,
        text: newMessage,
      });
      setNewMessage('');  // Clear input field after sending
      fetchMessages();  // Re-fetch messages to update UI
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Delete a message
  const deleteMessage = async (messageId) => {
    try {
      await axiosInstance.delete(`http://localhost:5000/chats/message/${chatId}/${messageId}`);
      // Remove the deleted message from the state without re-fetching
      setMessages(messages.filter(message => message._id !== messageId));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div className="chat-interface">
      <MessageList 
        messages={messages} 
        deleteMessage={deleteMessage}  // Pass delete function to MessageList
      />
      <MessageInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        sendMessage={sendMessage}
      />
      <FileUpload chatId={chatId} />
    </div>
  );
};

export default ChatInterface;
