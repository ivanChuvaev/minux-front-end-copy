import React from 'react'

type Props = {
    name: string,
    count: number
}

export default function BoxWithBorder({name, count}: Props) {
  return (
    <div className='border-line'>
      <div className='flex-conteiner-first-level'>
          <span className='text-fist-level'>Working Algorithms</span>
          <span>{count}</span>
      </div> 
    </div>
  )
}