export const emojiRegex = /\p{Emoji}/u;
export const emojiRegexG = /\p{Emoji}/gu;

export interface StrType {
  type: 'emoji' | 'text';
  value: string;
}

export const parseString = (str: string): StrType[] => {
  if (emojiRegexG.test(str)) {
    return str.split(' ').map((s) => {
      if (emojiRegex.test(s)) {
        return {
          type: 'emoji',
          value: s,
        };
      }
      return {
        type: 'text',
        value: s,
      };
    });
  }
  return [
    {
      type: 'text',
      value: str,
    },
  ];
};

export const parseEmoji = (emoji: string): string => {
  if (emoji.length === 1) {
    return emoji.charCodeAt(0).toString(16);
  }
  const comp =
    (emoji.charCodeAt(0) - 0xd800) * 0x400 +
    (emoji.charCodeAt(1) - 0xdc00) +
    0x10000;
  return (comp < 0 ? emoji.charCodeAt(0) : comp).toString(16);
};

export const getUrlCode = (code: string): string =>
  `https://twemoji.maxcdn.com/v/latest/svg/${code}.svg`;

export const getUrlEmoji = (emoji: string): string =>
  `https://twemoji.maxcdn.com/v/latest/svg/${parseEmoji(emoji)}.svg`;
