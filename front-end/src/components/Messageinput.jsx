import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../axiosinterceptors';

const MessageInput = ({ chatId, newMessage, setNewMessage, sendMessage }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('text', newMessage);
      formData.append('chatId', chatId);
      if (file) {
        formData.append('file', file);
      }

      // Send the message
      await axiosInstance.post('http://localhost:5000/chats/message', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setNewMessage('');  // Clear input field after sending
      setFile(null);  // Clear file after sending
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message"
        required
      />
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
