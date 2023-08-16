import { HTMLProps } from "react";
import styles from './FlightSheetOptions.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "@app/store"; 
import _ from 'lodash'
import { FlightSheetOptionsItem } from "./FlightSheetOptionsItem";
import { FQuadCornerConteiner } from "@shared/ui";

export const FlightSheetOptions = (props: HTMLProps<HTMLDivElement>) => {
    const data = useSelector((state: RootState) => state.staticData.data?.support)

    const cryptocurrencieNames = _.map(data?.cryptocurrencies, 'fullName')
    const walletNames = _.map(data?.wallets, 'source')
    const poolNames = _.map(data?.pools, 'poolsDomen')
    const minerNames = _.map(data?.miners, 'fullName')

    const fields = [
        {label: 'Crypto', options: cryptocurrencieNames, header: 'Choose crypto'},
        {label: 'Wallet', options: walletNames, header: 'Choose wallet'},
        {label: 'Pool', options: poolNames, header: 'Choose pool'},
        {label: 'Miner', options: minerNames, header: 'Choose miner'},
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