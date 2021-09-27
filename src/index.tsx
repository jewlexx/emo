import React, { FunctionComponent } from 'react';
import { parse } from 'twemoji-parser';

export interface EmojiProps {
  emoji: string;
  width?: string;
  height?: string;
}

const Emoji: FunctionComponent<EmojiProps> = ({
  emoji,
  width = '1em',
  height = '1em',
}) => {
  return (
    <span>
      {parse(emoji).map(({ url }) => (
        <img src={url} alt={emoji} style={{ width, height }} />
      ))}
    </span>
  );
};

export default Emoji;
