import { useState, useEffect } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { RootState } from "@app/store"; 

type FilteredOptions = {
    cryptocurrencies: string[];
    pools: string[];
    miners: string[];
    wallets: string[];
};

export const useFilteredOptions = (
    crypto: string,
    wallet: string,
    pool: string,
    miner: string
    ) => {
  const options = useSelector((state: RootState) => state.staticData.data?.support)

  const [filteredOptions, setFilteredOptions] = useState<FilteredOptions>({
    cryptocurrencies: _.map(options?.cryptocurrencies, 'fullName'),
    pools: _.map(options?.wallets, 'address'),
    miners: _.map(options?.pools, 'poolsDomen'),
    wallets: _.map(options?.miners, 'fullName')
  });

  useEffect(() => { 
    // Filter from crypto value
    const filterOptionsFromCrypto = () => { 
        if (crypto === "") return 

    const currentCryptoAlgorithm = _.find(options?.cryptocurrencies, {fullName: crypto})?.algorithms

    const filteredPools = _.filter(options?.pools, { coinName: crypto });         
    const filteredWallets = _.filter(options?.wallets, { coinName: crypto }); 
    const filteredMiners = _.filter(options?.miners, miner => _.includes(miner.algorithms, currentCryptoAlgorithm));

    const walletNames = _.map(filteredWallets, 'address') 
    const minerNames = _.map(filteredMiners, 'fullName')
    const poolNames = _.map(filteredPools, 'poolsDomen')

      setFilteredOptions({
        ...filteredOptions,
        wallets: walletNames,
        pools: poolNames,
        miners: minerNames,
      });
    }; 
    
    filterOptionsFromCrypto();

  }, [crypto, wallet, pool, miner]);

  return filteredOptions;
};