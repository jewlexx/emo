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

export default parse;
