import React from 'react'
import Miners from './Miners'
import Algorithms from './Algorithms'
import './index.scss' 

export default function WorkerWidget() {
  return (
    <div className='flex-conteiner-worker'> 
            <Miners/> 
            <Algorithms/> 
    </div>
  )
}