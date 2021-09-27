import React, { FunctionComponent } from 'react'
import styles from './styles.module.css'

export interface EmojiProps {
  emoji: string
}

export const Emoji: FunctionComponent<EmojiProps> = ({ emoji }) => {
  return <div className={styles.test}>Example: {emoji}</div>
}
