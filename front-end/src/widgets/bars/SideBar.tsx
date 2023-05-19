import React from 'react'
import './sideBar.scss'

type Props = {}

export default function SideBar({}: Props) {
  return (
    <div className='flex-conteiner-vertical'> 
      <div className='flex-conteiner-vertical_element'>
        imageMiner
      </div>

      <div className='flex-conteiner-vertical_element'>
        imageOff
      </div>
    </div>
  )
}