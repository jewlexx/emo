import React from 'react';
import Emo from 'emo-react';

const App = () => (
  <div>
    <h1>
      <Emo emoji="❄️" /> Things are looking kinda icy outside <Emo emoji="❄️" />
    </h1>
    <h1>
      <Emo emoji="🎉" /> Thank god these emojis are going to display the same
      everywhere <Emo emoji="🎉" />
    </h1>
    <h1>
      <Emo emoji="🥲" /> I don&apos;t know what I would do otherwise{' '}
      <Emo emoji="🥲" />
    </h1>
    <h2>
      Developed with <Emo emoji="❤️" /> by{' '}
      <a href="https://github.com/jamesinaxx" target="_blank" rel="noreferrer">
        jamesinaxx
      </a>
    </h2>
  </div>
);

export default App;
