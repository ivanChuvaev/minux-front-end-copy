import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, SideBar } from 'widgets/bars'

type Props = {}

export default function LayoutAbsolute({}: Props) {
  return (
    <> 
      <NavBar/> 
      <SideBar/>

      <Outlet/>
    </>
  )
}