import React, { HTMLProps } from 'react' 
import styles from './FlightSheetList.module.scss'
import arrowDown from 'shared/images/arrow-down.png'

export default function FlightSheetList(props: HTMLProps<HTMLDivElement>) {
    const data = [
        {id: 1, name: 'My RVN strategy', coinName: 'BTC', wallet: 'BYBIT RVN', pool: 'hiveon', miner: 'nbminer' },
        {id: 1, name: 'My RVN strategy', coinName: 'BTC', wallet: 'BYBIT RVN', pool: 'hiveon', miner: 'nbminer' }
    ]
  return (
    <div {...props} className={(props.className ?? "") + styles['wrapper']}>
        {data.map(item => (
            <div className={styles['border-line']}>
                <div key={item.id} className={styles['list-item']}>
                    <p>{item.name}</p>
                    <p>{item.coinName}</p>
                    <p>{item.wallet}</p>
                    <p>{item.pool}</p>
                    <p>{item.miner}</p>
                    <img src={arrowDown} alt='arrowDown'/>
                </div> 
            </div>
        ))}
        
    </div>
  )
}