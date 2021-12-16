import React from 'react';
import ReactDOM from 'react-dom';
import Emo from 'emo-react';
import './index.css';

ReactDOM.render(
  <div>
    <h1>
      <Emo>❄️</Emo> Things are looking kinda icy outside <Emo>❄️</Emo>
    </h1>
    <h1>
      <Emo>🎉</Emo> Thank god these emojis are going to display the same
      everywhere <Emo>🎉</Emo>
    </h1>
    <h1>
      <Emo>🥲</Emo> I don&apos;t know what I would do otherwise <Emo>🥲</Emo>
    </h1>
    <h2>
      Developed with <Emo>❤️</Emo> by{' '}
      <a href="https://github.com/jamesinaxx" target="_blank" rel="noreferrer">
        jamesinaxx
      </a>
    </h2>
  </div>,
  document.getElementById('root'),
);
