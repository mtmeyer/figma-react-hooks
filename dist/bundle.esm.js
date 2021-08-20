import{useEffect as e}from"react";function n(n){e((()=>{window.onmessage=e=>{let s=e.data.pluginMessage;n&&n(s)}}),[])}function s(e,n="*"){parent.postMessage({pluginMessage:e},n)}export{n as useOnMessage,s as usePostMessage};
//# sourceMappingURL=bundle.esm.js.map
