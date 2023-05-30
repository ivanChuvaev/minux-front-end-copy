import React from 'react'
import Miners from './Miners'
import Algorithms from './Algorithms'
import './index.scss'

type Props = {}

export default function WorkerWidget({}: Props) {
  return (
    <div className='flex-conteiner-worker'> 
            <Miners/> 
            <Algorithms/> 
    </div>
  )
}