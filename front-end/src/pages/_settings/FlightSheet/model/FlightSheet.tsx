import { HTMLProps } from "react";
import styles from './FlightSheet.module.scss'
import { FlightSheetOptions } from "./FlightSheetOptions";

export const FlightSheet = (props: HTMLProps<HTMLDivElement>) => {
  
  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FlightSheetOptions/>
    </div>
  )
}