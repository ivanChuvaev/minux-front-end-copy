import { HTMLProps } from "react"
import styles from './Ftopic.module.scss'
import _ from 'lodash'

type FTopicProps = Omit<HTMLProps<HTMLDivElement>, 'children'> & { text: string }

export const FTopic = (props: FTopicProps) => {
  return (
    <div {..._.omit(props, 'text', 'children')} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      {props.text}
      <div className={styles['underline']}></div>
    </div>
  )
}
