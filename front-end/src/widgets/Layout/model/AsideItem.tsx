import { HTMLProps } from "react"
import styles from './AsideItem.module.scss'

type AsideItemProps = HTMLProps<HTMLDivElement> & {
  text: string
}

export const AsideItem = (props: AsideItemProps) => {
  return (
    <div {...props} className={styles['wrapper']}>
      <div className={styles['icon']}>
        {props.children}
      </div>
      <div className={styles['text']}>{props.text}</div>
    </div>
  )
}
