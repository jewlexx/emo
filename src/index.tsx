import React from 'react';

const u = (e: string): string =>
  `https://twemoji.maxcdn.com/v/latest/svg/${e}.svg`;

const p = (e: string): string => {
  if (e.length === 1) {
    return e.charCodeAt(0).toString(16);
  }
  const c =
    (e.charCodeAt(0) - 0xd800) * 0x400 + (e.charCodeAt(1) - 0xdc00) + 0x10000;
  return (c < 0 ? e.charCodeAt(0) : c).toString(16);
};

export interface EmojiProps {
  /** The emoji you would like to use. Eg.🕊️ */
  emoji: string;
  /** The font width of the emoji. Will be passed to the width prop in css */
  fontWidth?: number;
  /** The font height of the emoji. Will be passed to the height prop in css */
  fontHeight?: number;
}

const Emoji: React.FunctionComponent<EmojiProps> = ({
  emoji,
  fontWidth = 1,
  fontHeight = 1,
}) => (
  <img
    src={u(p(emoji))}
    alt={emoji}
    style={{ width: `${fontWidth}em`, height: `${fontHeight}em` }}
  />
);

export default Emoji;
