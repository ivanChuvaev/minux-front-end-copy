import { HTMLProps } from "react";
import styles from './FlightSheetOptions.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "@app/store"; 

export const FlightSheetOptions = (props: HTMLProps<HTMLDivElement>) => {
    const data = useSelector((state: RootState) => state.support.data)

    const fields = [
        {label: ''}
    ]
  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
        
    </div>
  )
}