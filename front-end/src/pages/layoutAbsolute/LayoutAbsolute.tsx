import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, SideBar } from 'widgets/bars' 

export default function LayoutAbsolute() {
  return (
    <> 
      <NavBar/> 
      <SideBar/>

      <Outlet/>
    </>
  )
}