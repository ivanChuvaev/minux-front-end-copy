import { HTMLProps } from "react"
import styles from './FButton.module.scss'
import _ from 'lodash'

type FButtonProps = HTMLProps<HTMLButtonElement> & { type: 'good' | 'bad' }

export const FButton = (props: FButtonProps) => {
  return (
    <button {..._.omit(props, 'type')} className={(props.className ?? '') + ' ' + styles['wrapper'] + ' ' + (props.type === 'good' ? styles['good'] : styles['bad'])} tabIndex={0}>
      <div className={styles['inner']}>
        {props.children}
      </div>
    </button>
  )
}
