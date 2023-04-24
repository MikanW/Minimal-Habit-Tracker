import axios, { AxiosResponse } from 'axios';

interface GenerateTextRequestData {
  prompt: string;
  max_tokens: number;
  n: number;
  stop: string[];
}

interface Choice {
  text: string;
  index: number;
  logprobs?: any;
  finish_reason?: string;
}

interface GenerateTextResponseData {
  choices: Choice[];
  created: number;
  id: string;
}

export const generateText = async (prompt: string): Promise<string> => {
  const requestData: GenerateTextRequestData = {
    prompt,
    max_tokens: 150,
    n: 1,
    stop: ["\n"]
  };

  const response: AxiosResponse<GenerateTextResponseData> = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', requestData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
    }
  });

  return response.data.choices[0].text;
}