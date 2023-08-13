import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, SideBar } from 'widgets/bars' 

export default function LayoutAbsolute() {
  return (
    <div className='flex'>
        <SideBar/>
        <div className=' w-full'>
          <NavBar/> 

          <Outlet/> 
        </div>
    </div>
  )
}