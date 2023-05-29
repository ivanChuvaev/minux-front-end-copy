import React from 'react' 
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';
import minersCount from './minersCount';

type Props = {}

export default function Miners({}: Props) { 
  const gpusDynamic = useSelector((state: RootState) => state.gpuDynamic.data);
  
  const counts: number = minersCount(gpusDynamic);

  return (
    <div className='flex-conteiner'>
        <p>Working Miners</p>
        <p>{counts}</p>
    </div>
  )
}