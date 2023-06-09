import React from 'react'
import { NavLink } from 'react-router-dom'
// import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className='header'>
      <NavLink to={'/cards'}>All Movies</NavLink>
      <NavLink to={'/addcard'}>Add Movies</NavLink>
    </div>
  )
}

export default Header
