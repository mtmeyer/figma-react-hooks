import React from 'react';
import styles from './ui.module.scss';
import { usePostMessage, useOnMessage } from 'figma-react-hooks';

import Button from './components/Button';

const UI = ({}) => {
  const textbox = React.useRef(undefined);

  const countRef = React.useCallback((element) => {
    if (element) element.value = '5';
    textbox.current = element;
  }, []);

  const onCreate = () => {
    const count = parseInt(textbox.current.value, 10);
    // parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
    usePostMessage({ type: 'create-rectangles', count });
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
    usePostMessage({ type: 'cancel' });
  };

  useOnMessage((data) => {
    const { type, message } = data;
    if (type === 'create-rectangles') {
      console.log('Guava');
      console.log(`Figma Says: ${message}`);
    }
  });

  return (
    <div className={styles.container}>
      <h2>Rectangle Creator</h2>
      <p>
        Count: <input ref={countRef} />
      </p>
      <div className={styles.buttonContainer}>
        <Button onClick={onCreate}>Create</Button>
        <Button onClick={onCancel} secondary>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default UI;
