import React from 'react';
import ReactDOM from 'react-dom';
import Emo from 'emo-react';
import './index.css';

ReactDOM.render(
  <div>
    <h1>
      <Emo>❄️ Things are looking kinda icy outside ❄️</Emo>
    </h1>
    <h1>
      <Emo>
        🎉 Thank god these emojis are going to display the same everywhere 🎉
      </Emo>
    </h1>
    <h1>
      <Emo>🥲 I don&apos;t know what I would do otherwise 🥲</Emo>
    </h1>
    <h2>
      <Emo>Developed with ❤️ by</Emo>{' '}
      <a href="https://github.com/jamesinaxx" target="_blank" rel="noreferrer">
        jamesinaxx
      </a>
    </h2>
  </div>,
  document.getElementById('root'),
);
