import { ChangeEvent, HTMLProps, useState } from "react";
import styles from './FlightSheetOptions.module.scss' 
import _ from 'lodash'
import { FlightSheetOptionsItem } from "./FlightSheetOptionsItem";
import { FQuadCornerConteiner } from "@shared/ui"; 
import { useFilteredOptions } from "./useFilteredOptions";


export const FlightSheetOptions = (props: HTMLProps<HTMLDivElement>) => { 
  // current value state
  const [flightSheetName, setFlightSheetName] = useState<string>('');
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const [selectedPool, setselectedPool] = useState<string>('');
  const [selectedMiner, setSelectedMiner] = useState<string>(''); 

  const handlerChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setFlightSheetName(event.target.value);
  }
    const { cryptocurrencies, 
      pools, 
      wallets, 
      miners 
    } = useFilteredOptions(
      selectedCrypto,
      selectedWallet,
      selectedPool,
      selectedMiner
      );
      
      const fields = [
        {label: 'Crypto', value: selectedCrypto, options: cryptocurrencies, header: 'Choose crypto', setState: setSelectedCrypto},
        {label: 'Wallet', value: selectedWallet, options: wallets, header: 'Choose wallet', setState: setSelectedWallet},
        {label: 'Pool', value: selectedPool, options: pools, header: 'Choose pool', setState: setselectedPool},
        {label: 'Miner', value: selectedMiner, options: miners, header: 'Choose miner', setState: setSelectedMiner},
      ]

  return (
    <div {...props} className={(props.className ?? '') + ' ' + styles['wrapper']}>
      <FQuadCornerConteiner className={styles['fields-grid-wrapper'] + " " + styles['black']}> 
        {fields.map(item => (
            <FlightSheetOptionsItem key={item.label} item={item}/> 
            ))} 

        <div className={styles['input-conteiner']}>
          <p className={styles['text']}>Name</p>
          <input className={styles['input']} 
          type="text" value={flightSheetName} 
          onChange={handlerChangeName}
          placeholder="Write flight sheet's name..."/> 
        </div>
      </FQuadCornerConteiner> 

      <div className={styles['flex-button-wrapper']}> 
          <div className={styles['button-reset']}>
            <p>Reset</p>
          </div>

          <div className={styles['button-accept']}>
            <p>Create flight sheet</p>
          </div>
      </div>
    </div>
  )
}