import React from 'react'
import { GpuDynamic } from './dynamic/types'

type Props = {
    item: GpuDynamic
    index: number
}

interface gpuTicket {
    index: number
    name: string
    accepted: number
}

export default function GpuItem({item, index}: Props) {
  return ( 
        <div className='gpu-card'>
            <span className='span-1'>{index}</span>
            <span className='span-1'>{item.fullName}</span>
            <span className='span-1'>{item.shares.accepted}</span>
            <span className='span-1'>{item.shares.rejected}</span>
            <span className='span-1'>{item.hashrateMg}</span>
            <span className='span-1'>{item.temperatureCelcius}</span>
            <span className='span-1'>{item.fanSpeedPercentage}</span>
            <span className='span-1'>{item.powerUsage}</span> 
        </div> 
  )
}