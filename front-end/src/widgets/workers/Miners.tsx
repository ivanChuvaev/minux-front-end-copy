import React from 'react' 
import { RootState } from 'app/store';
import { useSelector } from 'react-redux'; 
import 'shared/styles/widgets-first-level.scss' 
import BoxWithBorder from 'shared/components/BoxWithBorder'; 

const name: string = 'Working miners'

export default function Miners() { 
  const totalMiners = useSelector((state: RootState) => state.support.data?.totalValues.gpusMiners); 

  return (
    <BoxWithBorder name={name} count={totalMiners}/>
  )
}