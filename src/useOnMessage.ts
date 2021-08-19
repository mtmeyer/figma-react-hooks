import { useEffect } from 'react';

// TODO: Add ability to return data without having to pass in a function.

export default function useOnMessage(inputFunction: (data: any) => void): any {
  useEffect(() => {
    window.onmessage = (event) => {
      let data = event.data.pluginMessage;
      if (inputFunction) {
        inputFunction(data);
      }
    };
  }, []);
}
