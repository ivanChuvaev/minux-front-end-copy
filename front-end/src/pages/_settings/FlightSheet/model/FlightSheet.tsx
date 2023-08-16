import { HTMLProps } from "react";
import styles from './FlightSheet.module.scss'

export const FlightSheet = (props: HTMLProps<HTMLDivElement>) => {
  
  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
 
    </div>
  )
}