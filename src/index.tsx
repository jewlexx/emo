import React, { FunctionComponent } from 'react';
import { parse } from 'twemoji-parser';

export interface EmojiProps {
  emoji: string;
}

const Emoji: FunctionComponent<EmojiProps> = ({ emoji }) => (
  <span>
    {parse(emoji).map(({ url }) => (
      <img src={url} alt={emoji} style={{ width: '1em', height: '1em' }} />
    ))}
  </span>
);

export default Emoji;
