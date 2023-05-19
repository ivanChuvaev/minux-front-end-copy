import React from 'react'
import './navBar.scss'

type Props = {}

export default function NavBar({}: Props) {
  return (
    <div className='flex-conteiner-horizontal'>
        <div className='flex-conteiner-horizontal_element'>
            Monitoring
        </div>

        <div className='flex-conteiner-horizontal_element'>
            Settings
        </div>

        <div className='flex-conteiner-horizontal_element'> 
            Analytics
        </div>

        <div className='flex-conteiner-horizontal_element'> 
            System
        </div>
    </div>
  )
}