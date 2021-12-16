import React from 'react';
import Emo from '../../dist/index.js';

const App = () => (
  <div>
    <h1>
      <Emo>❄️</Emo> Things are looking kinda icy outside <Emo>❄️</Emo>
    </h1>
    <h1>
      <Emo emoji="🎉" /> Thank god these emojis are going to display the same
      everywhere <Emo emoji="🎉" />
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
  </div>
);

export default App;
