import React, { FunctionComponent } from 'react';
import { parse } from 'twemoji-parser';

export interface EmojiProps {
  /** The emoji you would like to use. Eg.🕊️ */
  emoji: string;
  /** The width of the emoji. Will be passed to the width prop in css */
  width?: string;
  /** The height of the emoji. Will be passed to the height prop in css */
  height?: string;
}

const Emoji: FunctionComponent<EmojiProps> = ({
  emoji,
  width = '1em',
  height = '1em',
}) => (
  <span>
    {parse(emoji).map(({ url }) => (
      <img src={url} alt={emoji} style={{ width, height }} />
    ))}
  </span>
);

export default Emoji;
