import React from 'react'
import './coins.scss'
import CoinsScroll from './CoinsScroll'
import { useSelector } from 'react-redux'
import { RootState } from 'app/store' 

export default function Coins() {
  const coinsValue = useSelector((state: RootState) => state.support.data?.coinsValue); 

  return ( 
    <div className='flex-conteiner-coin'>
        <div className='border-line'> 
          <div className='coin-conteiner'>
              <span>Coin</span>
              <span>Algorithm</span>
              <span>Value</span>
          </div>   
        </div> 

        <CoinsScroll coinsValue={coinsValue}/>
    </div>
  )
}