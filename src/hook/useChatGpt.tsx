import { useEffect, useState } from "react"


export const useChatGpt = (message:string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (message:string) => {
    setIsLoading(true);
    try {
      console.log("fetching...");
      const response = await fetch("/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message,
        })
      }).then((res) => (res.json()));
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }
  
  useEffect(() => {
    if ( message ) {
      fetchData(message);
    }
  }, [message])
  

  return {
    data,
    isLoading,
    isError
  };
}