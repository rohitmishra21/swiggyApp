import React from 'react'
import Nav from './components/Nav'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'


const App = () => {
  return (
    <div className=' py-5 px-20'>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
