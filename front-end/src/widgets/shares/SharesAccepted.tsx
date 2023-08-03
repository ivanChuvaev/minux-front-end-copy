import React from 'react'
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';
import BoxWithBorder from 'shared/components/BoxWithBorder' 

const name: string = 'Total Shares Accepted' 

export default function SharesAccepted() { 
  const totalAccepted = useSelector((state: RootState) => state.support.data?.totalValues.gpusAccepted); 

  return ( 
    <BoxWithBorder name={name} count={totalAccepted} color1='green'/> 
  )
}