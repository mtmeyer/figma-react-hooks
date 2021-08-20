"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");exports.useOnMessage=function(s){e.useEffect((()=>{window.onmessage=e=>{let t=e.data.pluginMessage;s&&s(t)}}),[])},exports.usePostMessage=function(e,s="*"){parent.postMessage({pluginMessage:e},s)};
//# sourceMappingURL=bundle.js.map
