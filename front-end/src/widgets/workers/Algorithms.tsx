import React from 'react' 
import { RootState } from 'app/store';
import { useSelector } from 'react-redux'; 
import BoxWithBorder from 'shared/components/BoxWithBorder'; 
import 'shared/styles/widgets-first-level.scss' 

const name: string = 'Working algorithms'; 

export default function Algorithms() { 
  const totalAlgorithms = useSelector((state: RootState) => state.support.data?.totalValues.gpusAlgorithms); 

  return (
    <BoxWithBorder name={name} count={totalAlgorithms}/>
  )
}