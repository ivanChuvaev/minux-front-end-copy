import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, SideBar } from 'widgets/bars' 
import './layoutAbsolute.scss'

export default function LayoutAbsolute() {
  return (
    <div className='layout-absolute'>
        <SideBar/>
        <div className='layout-absolute-content'>
          <NavBar/> 

          <Outlet/> 
        </div>
    </div>
  )
}