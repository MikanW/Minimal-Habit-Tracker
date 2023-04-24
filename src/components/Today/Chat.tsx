import React, { useState } from 'react';
import { generateText } from '../../chatGPT';

function Chat() {
  const [text, setText] = useState('');

  const handleClick = async () => {
    const generatedText: string = await generateText("Hello, I'm a genie!");
    setText(generatedText);
  }

  return (
    <div>
      <button onClick={handleClick}>Generate Text</button>
      <p>{text}</p>
    </div>
  );
}

export default Chat;