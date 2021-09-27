import React from 'react';
import Emoji from 'emo-react';

const App: React.FunctionComponent = () => (
  <div>
    <h1>
      <Emoji emoji="❄️" /> Things are looking kinda icy outside{' '}
      <Emoji emoji="❄️" />
    </h1>
    <h1>
      <Emoji emoji="🎉" /> Thank god these emojis are going to display the same
      everywhere <Emoji emoji="🎉" />
    </h1>
    <h1>
      <Emoji emoji="🥲" /> I don&apos;t know what I would do otherwise{' '}
      <Emoji emoji="🥲" />
    </h1>
    <h2>
      Developed with <Emoji emoji="❤️" /> by{' '}
      <a href="https://github.com/jamesinaxx" target="_blank" rel="noreferrer">
        jamesinaxx
      </a>
    </h2>
  </div>
);

export default App;
