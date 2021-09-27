import React, { FunctionComponent, useRef } from 'react'
import twemoji from 'twemoji'

export interface EmojiProps {
  emoji: string
}

const Emoji: FunctionComponent<EmojiProps> = ({ emoji }) => {
  const emojiRef = useRef<HTMLSpanElement>(null)

  return (
    <span ref={emojiRef}>
      {twemoji.replace('❄️', () => {
        return
      })}
      {emoji}
    </span>
  )
}

export default Emoji
