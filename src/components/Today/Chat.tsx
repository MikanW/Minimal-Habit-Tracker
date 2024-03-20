import React, { useState } from "react";
import { generateText } from "../../api/chatgpt";
//import { useChatGpt } from "../../hook/useChatGpt";

const DEFAULT_PARAMS = {
  model: "gpt-3.5-turbo",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

export async function query(params = {}) {
  const params_ = { ...DEFAULT_PARAMS, ...params };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify(params_),
  };
  const response = await fetch(
    "https://api.openai.com/v1/completions",
    requestOptions
  );
  const data = await response.json();
  console.log(data);
  return data.choices[0].text;
}

function Chat() {
  // const { data, isError, isLoading } = useChatGpt("hello");
  // // const configuration = new Configuration({
  // //   apiKey: import.meta.env.VITE_OPENAI_API_KEY
  // // })
  // // //delete configuration.baseOptions.headers['User-Agent'];

  // // const openai = new OpenAIApi(configuration);

  // // const [text, setText] = useState('');

  // const handleClick = async (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   e.preventDefault();

  //   // const response = await openai.createChatCompletion({
  //   //   model: "gpt-3.5-turbo",
  //   //   messages: [{role:"user", content:"Hello"}]
  //   // })
  //   //const response = await generateText("Hello");

  //   console.log(data);
  //   //console.log(response);
  // };

  return <div></div>;
}

export default Chat;
