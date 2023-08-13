import styles from './Aside.module.scss'
import { AsideItem } from './AsideItem'
import stopMining from '@shared/images/stop-mining.png'
import powerOff from '@shared/images/power-off.svg'

export const Aside = () => {
  return (
    <div className={styles['wrapper']}>
      <AsideItem text="Stop Mining">
        <img src={stopMining} alt="Stop mining" />
      </AsideItem>
      <AsideItem text="Power Off">
        <img src={powerOff} alt="Power Off" />
      </AsideItem>
    </div>
  )
}
