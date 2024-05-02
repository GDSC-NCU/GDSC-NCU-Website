import React from 'react';
import './message.css';

const Message = () => {
  return (
    <div className="message-container">
      <ul className="chat-thread">
        <li>Are we meeting today?</li>
        <li>yes, what time suits you?</li>
        <li>I was thinking after lunch, I have a meeting in the morning</li>
        <li>GDSC EXAMPLE TEXT HERE</li>
      </ul>
    </div>
  );
};

export default Message;
