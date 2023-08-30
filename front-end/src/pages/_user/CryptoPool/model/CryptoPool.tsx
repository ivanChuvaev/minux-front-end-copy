import { CryptocurrencyAdd } from "@features/CryptocurrencyAdd";
import { PoolAdd } from "@features/PoolAdd";
import { HTMLProps } from "react";
import styles from './CtyptoPool.module.scss'


export const CryptoPool = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <div className={styles['label']}>Add cryptocurrency</div>
      <CryptocurrencyAdd />
      <div className={styles['label']}>Add pool</div>
      <PoolAdd />
    </div>
  )
}
