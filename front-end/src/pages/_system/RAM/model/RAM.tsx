import { HTMLProps } from "react"
import styles from './RAM.module.scss'

type RAMProps = HTMLProps<HTMLDivElement>

export const RAM = (props: RAMProps) => {
  return (
    <div {...props} className={(props.className ?? '') + " " + styles['wrapper']}>
      ram
    </div>
  )
}
