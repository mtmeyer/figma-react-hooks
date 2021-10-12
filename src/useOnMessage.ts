import { useEffect , useState} from 'react';

export default function useOnMessage() {
  const [msg, setMsg] = useState();
  useEffect(() => {
    const handleMsg = (event) => {
      if (event.data.pluginMessage) {
        setMsg(event.data.pluginMessage);
      }
    };
    window.addEventListener('message', handleMsg);
    return window.removeEventListener('message', handleMsg);
  }, []);

  return msg;
}
