import React from 'react';

const url = (emoji: string): string =>
  `https://twemoji.maxcdn.com/v/13.1.0/svg/${emoji}.svg`;

const parse = (emoji: string): string => {
  if (emoji.length === 1) {
    return emoji.charCodeAt(0).toString(16);
  }
  const comp =
    (emoji.charCodeAt(0) - 0xd800) * 0x400 +
    (emoji.charCodeAt(1) - 0xdc00) +
    0x10000;
  if (comp < 0) {
    return emoji.charCodeAt(0).toString(16);
  }
  return comp.toString(16);
};

export interface EmojiProps {
  /** The emoji you would like to use. Eg.🕊️ */
  emoji: string;
  /** The width of the emoji. Will be passed to the width prop in css */
  width?: string;
  /** The height of the emoji. Will be passed to the height prop in css */
  height?: string;
}

const Emoji: React.FunctionComponent<EmojiProps> = ({
  emoji,
  width = '1em',
  height = '1em',
}) => <img src={url(parse(emoji))} alt={emoji} style={{ width, height }} />;

export default Emoji;
