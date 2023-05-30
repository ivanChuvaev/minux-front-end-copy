import React from 'react' 
import { RootState } from 'app/store';
import { useSelector } from 'react-redux'; 
import BoxWithBorder from 'shared/components/BoxWithBorder';
import { countNonEmptyValues } from 'shared/utils'
import 'shared/styles/widgets-first-level.scss' 

type Props = {}

const name: string = 'Working algorithms'; 

export default function Algorithms({}: Props) { 
  const gpusDynamic = useSelector((state: RootState) => state.gpuDynamic.data);
  
  const count: number = countNonEmptyValues(gpusDynamic, 'algorithm'); 

  return (
    <BoxWithBorder name={name} count={count}/>
  )
}