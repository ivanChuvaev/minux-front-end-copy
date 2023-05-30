import React from 'react' 
import { RootState } from 'app/store';
import { useSelector } from 'react-redux'; 
import 'shared/styles/widgets-first-level.scss' 
import BoxWithBorder from 'shared/components/BoxWithBorder';
import objectKeyCounter from '../../shared/utils/countNonEmptyValues';

type Props = {}

const name: string = 'Working miners'

export default function Miners({}: Props) { 
  const gpusDynamic = useSelector((state: RootState) => state.gpuDynamic.data); 
  
  const count: number = objectKeyCounter(gpusDynamic, 'miner');

  return (
    <BoxWithBorder name={name} count={count}/>
  )
}