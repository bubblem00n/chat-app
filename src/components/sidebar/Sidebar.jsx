import React from 'react'
import s from "./sidebar.module.scss"
import Navbar from './components/Navbar'

const Sidebar = () => {
  return (
    <div className={s.root}>
      <Navbar/>
    </div>
  )
}

export default Sidebar