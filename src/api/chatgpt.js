//import axios, { AxiosResponse } from 'axios';
import { Configuration, OpenAIApi } from "openai";

const chatgpt = async (req, res) => {
  const { message } = req.body;
  console.log("api call");
  if (!message) {
    res.status(400).json({ error: "Message is required." });
    return;
  }
  const reply = await getReply(message);
  res.status(200).json({ reply });
  return;
};

const getReply = (message) => {
  return "";
};

export default chatgpt;

// interface GenerateTextRequestData {
//   prompt: string;
//   max_tokens: number;
//   n: number;
//   stop: string[];
// }

// interface Choice {
//   text: string;
//   index: number;
//   logprobs?: any;
//   finish_reason?: string;
// }

// interface GenerateTextResponseData {
//   choices: Choice[];
//   created: number;
//   id: string;
// }

// export const generateText = async (prompt: string): Promise<string> => {
//   const requestData: GenerateTextRequestData = {
//     prompt,
//     max_tokens: 150,
//     n: 1,
//     stop: ["\n"]
//   };

//   const response: AxiosResponse<GenerateTextResponseData> = await axios.post('https://api.openai.com/v1/completions', requestData, {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
//     }
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   return response.data.choices[0].text;
// }
