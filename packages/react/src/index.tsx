// eslint-disable-next-line import/no-unresolved
import React from 'react';
import { getUrlEmoji, parseString } from 'emo-lib';

export interface EmojiProps {
  /** The emoji you would like to use. Eg.🕊️ */
  children: string;
}

const Emo: React.FunctionComponent<EmojiProps> = ({ children: e }) => {
  if (typeof e !== 'string') {
    throw new Error('Emoji must be a string');
  }

  return (
    <span>
      {parseString(e).map((emoji): React.ReactNode => {
        if (emoji.type === 'text') {
          return ` ${emoji.value} `;
        }
        return (
          <>
            {' '}
            <img
              src={getUrlEmoji(emoji.value)}
              alt={e}
              style={{
                width: '1em',
                height: '1em',
              }}
            />{' '}
          </>
        );
      })}
    </span>
  );
};

export default Emo;
