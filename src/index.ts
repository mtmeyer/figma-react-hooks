import { useEffect } from 'react';

export function usePostMessage(object: any, options = '*'): void {
  parent.postMessage({ pluginMessage: object }, options);
}

export function useOnMessage(inputFunction?: (data: any) => void): any {
  useEffect(() => {
    window.onmessage = (event) => {
      let data = event.data.pluginMessage;
      if (inputFunction) {
        inputFunction(data);
      }
    };
  }, []);
}
