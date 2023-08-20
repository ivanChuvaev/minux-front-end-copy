import { HTMLProps } from "react"
import styles from './FTrisContainer.module.scss'

type FtrisContainerProps = HTMLProps<HTMLDivElement>

export const FTrisContainer = (props: FtrisContainerProps) => {
  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <div className={styles['lt-triangle']} />
      <div className={styles['rt-triangle']} />
      <div className={styles['lb-triangle']} />
      <div className={styles['rb-triangle']} />
      {props.children}
    </div>
  )
}
