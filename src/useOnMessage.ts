import { useEffect } from 'react';

export default function useOnMessage(inputFunction?: (data: any) => void): any {
  useEffect(() => {
    window.onmessage = (event) => {
      let data = event.data.pluginMessage;
      if (inputFunction) {
        inputFunction(data);
      }
    };
  }, []);
}
