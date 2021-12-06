// eslint-disable-next-line import/no-unresolved
import React from 'react';

const parse = (emoji: string): string => {
  if (emoji.length === 1) {
    return emoji.charCodeAt(0).toString(16);
  }
  const comp =
    (emoji.charCodeAt(0) - 0xd800) * 0x400 +
    (emoji.charCodeAt(1) - 0xdc00) +
    0x10000;
  return (comp < 0 ? emoji.charCodeAt(0) : comp).toString(16);
};

export interface EmojiProps {
  /** The emoji you would like to use. Eg.🕊️ */
  emoji: string;
  /** The font width of the emoji. Will be passed to the width prop in css */
  width?: number;
  /** The font height of the emoji. Will be passed to the height prop in css */
  height?: number;
}

const Emo: React.FunctionComponent<EmojiProps> = ({
  emoji,
  width = 1,
  height = 1,
}) => (
  <img
    src={`https://twemoji.maxcdn.com/v/latest/svg/${parse(emoji)}.svg`}
    alt={emoji}
    style={{ width: `${width}em`, height: `${height}em` }}
  />
);

export default Emo;
