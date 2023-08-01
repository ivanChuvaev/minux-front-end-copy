import React from 'react'

type Props = {
    name: string,
    count: string | number
}

export default function BoxWithBorder({name, count}: Props) {
  return ( 
      <div className='border-line'>
        <div className='flex-conteiner-first-level'>
            <span className='text-first-level'>{name}</span>
            <span className='text-first-level1'>{count}</span>
        </div> 
      </div> 
  )
}