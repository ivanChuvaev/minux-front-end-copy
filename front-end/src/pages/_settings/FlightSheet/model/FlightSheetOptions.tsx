import { HTMLProps, useEffect, useState } from "react";
import styles from './FlightSheetOptions.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "@app/store"; 
import _ from 'lodash'
import { FlightSheetOptionsItem } from "./FlightSheetOptionsItem";
import { FQuadCornerConteiner } from "@shared/ui";
import { current } from "@reduxjs/toolkit"; 


export const FlightSheetOptions = (props: HTMLProps<HTMLDivElement>) => { 
  // current value state
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const [selectedPool, setselectedPool] = useState<string>('');
  const [selectedMiner, setSelectedMiner] = useState<string>(''); 

  // data init
  const data = useSelector((state: RootState) => state.staticData.data?.support)
    const cryptocurrencieNames = _.map(data?.cryptocurrencies, 'fullName')
    const walletNames = _.map(data?.wallets, 'source')
    const poolNames = _.map(data?.pools, 'poolsDomen')
    const minerNames = _.map(data?.miners, 'fullName') 

  // filtered values after selection state
  const [filteredCryptoOptions, setFilteredCryptoOptions] = useState<string[]>(cryptocurrencieNames); 
  const [filteredWalletOptions, setFilteredWalletOptions] = useState<string[]>(walletNames); 
  const [filteredPoolOptions, setFilteredPoolOptions] = useState<string[]>(poolNames);
  const [filteredMinerOptions, setFilteredMinerOptions] = useState<string[]>(minerNames); 

  const handleCryptoChange = (value: string) => { 
    setSelectedCrypto(value); 
  }

  const handleWalletChange = (value: string) => { 
    setSelectedWallet(value)
  }

  const handlePoolChange = (value: string) => { 
    setselectedPool(value)
  }

  const handleMinerChange = (value: string) => { 
    setSelectedMiner(value)
  } 

  const fields = [
    {label: 'Crypto', options: filteredCryptoOptions, header: 'Choose crypto', handler: handleCryptoChange},
    {label: 'Wallet', options: filteredWalletOptions, header: 'Choose wallet', handler: handleWalletChange},
    {label: 'Pool', options: filteredPoolOptions, header: 'Choose pool', handler: handlePoolChange},
    {label: 'Miner', options: filteredMinerOptions, header: 'Choose miner', handler: handleMinerChange},
  ]

  useEffect(() => {
    if (selectedCrypto === '') return

    const currentCryptoAlgorithm = _.find(data?.cryptocurrencies, {fullName: selectedCrypto})?.algorithms

    // filtering by selected cryptocurrency 
    const filteredWallets = _.filter(data?.wallets, { coinName: selectedCrypto })
    const filteredPools = _.filter(data?.pools, { coinName: selectedCrypto })
    const filteredMiner= _.filter(data?.miners, miner => _.includes(miner.algorithms, currentCryptoAlgorithm))

    // get names of filtered list 
    const filteredWalletNames = _.map(filteredWallets, 'source')
    const filteredPoolNames = _.map(filteredPools, 'poolsDomen')
    const filteredMinerNames = _.map(filteredMiner, 'fullName')

    // set 
    setFilteredWalletOptions(filteredWalletNames)
    setFilteredPoolOptions(filteredPoolNames)
    setFilteredMinerOptions(filteredMinerNames)

  }, [selectedCrypto]); 

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