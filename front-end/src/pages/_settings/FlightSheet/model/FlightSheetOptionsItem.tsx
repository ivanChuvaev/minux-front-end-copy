import { HTMLProps } from "react";
import styles from './FlightSheetOptionsItem.module.scss';
import { Link } from "react-router-dom";

type FlightSheetOptionsItemProps = HTMLProps<HTMLDivElement> & {
    item: {
        label: string, options: Object[] | undefined
    } 
}


export const FlightSheetOptionsItem = (props: FlightSheetOptionsItemProps) => { 

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
        <div className={styles['header']}>
            {props.item.label}
            <Link to='/crypto-pool'>Add</Link>
        </div>
        <div className={styles['drop-down']}>

        </div>
    </div>
  )
}