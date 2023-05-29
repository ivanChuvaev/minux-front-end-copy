import React from 'react' 
import { RootState } from 'app/store';
import { useSelector } from 'react-redux'; 
import algorithmCount from './algorithmsCount';

type Props = {}

export default function Algorithms({}: Props) { 
  const gpusDynamic = useSelector((state: RootState) => state.gpuDynamic.data);
  
  const counts: number = algorithmCount(gpusDynamic);

  return (
    <div className='flex-conteiner'>
        <p>Working Algorithms</p>
        <p>{counts}</p>
    </div>
  )
}