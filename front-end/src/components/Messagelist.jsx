import React from 'react';

const MessageList = ({ messages, deleteMessage }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message._id} className="message">
          <p>{message.text}</p>
          {/* Show delete button only if the user is the sender or you can customize the logic */}
          <button onClick={() => deleteMessage(message._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
