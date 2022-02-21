import React from 'react'
import { Link } from 'react-router-dom'
import Nike from '../images/Nike.jpg'
import CartWidget from '../CartWidget/CartWidget'

function NavBar () {
  return (
    <header>
      <Link to='/'>
        <div className='logo'>
          <img src={Nike} alt='logo' width='150' />
        </div>
      </Link>
      <ul>
        <li>
          <Link to='/categoria/1'>CATEGORIA 1</Link>
        </li>
        <li>
          <Link to='/categoria/2'>CATEGORIA 2</Link>
        </li>
      </ul>
      <CartWidget/>
    </header>
  )
}

export default NavBar
