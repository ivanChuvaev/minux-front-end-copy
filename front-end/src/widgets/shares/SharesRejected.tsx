import React from 'react'
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';
import BoxWithBorder from 'shared/components/BoxWithBorder' 

const name: string = 'Total Shares Rejected'

export default function SharesRejected() { 
  const totalRejected = useSelector((state: RootState) => state.dynamicData.data?.calculations.gpusRejected); 

  return ( 
    <BoxWithBorder name={name} count={totalRejected} color1='red'/> 
  )
}