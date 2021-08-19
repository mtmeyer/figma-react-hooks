import { useEffect } from "react";

export function usePostMessage(object: any, options = "*"): void {
  console.log(object);
  parent.postMessage({ pluginMessage: object }, options);
}

export function useOnMessage(inputFunction?): any {
  useEffect(() => {
    window.onmessage = (event) => {
      let data = event.data.pluginMessage;
      if (inputFunction) {
        console.log("input function");
        inputFunction(data);
      }
    };
  }, []);
}
