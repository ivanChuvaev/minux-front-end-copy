import { HTMLProps } from "react";
import styles from './FlightSheetOptions.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "@app/store"; 
import _ from 'lodash'
import { FlightSheetOptionsItem } from "./FlightSheetOptionsItem";
import { FQuadCornerConteiner } from "@shared/ui";

export const FlightSheetOptions = (props: HTMLProps<HTMLDivElement>) => {
    const data = useSelector((state: RootState) => state.support.data)

    const fields = [
        {label: 'Crypto', options: data?.cryptocurrencies},
        {label: 'Wallet', options: data?.wallets},
        {label: 'Pool', options: data?.pools},
        {label: 'Miner', options: data?.miners},
    ]

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FQuadCornerConteiner className={styles['fields-grid-wrapper'] + " " + styles['black']}> 
        {fields.map(item => (
            <FlightSheetOptionsItem key={item.label} item={item}/> 
            ))} 
      </FQuadCornerConteiner>
    </div>
  )
}