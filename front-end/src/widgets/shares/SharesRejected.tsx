import React from 'react'
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';
import BoxWithBorder from 'shared/components/BoxWithBorder'
import sumOfValues from 'shared/components/sumOfValues';

const name: string = 'Total Shares Rejected'

export default function SharesRejected() { 
  const gpusDynamic = useSelector((state: RootState) => state.gpuDynamic.data); 
    
  const count: number = sumOfValues(gpusDynamic, 'shares', 'rejected')

  return ( 
    <BoxWithBorder name={name} count={count}/> 
  )
}