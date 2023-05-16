import React from 'react';
import img from '../assets/logo.png'
import { Link } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'

function Header() {
  return (
    <nav>
       <img src={img} height={'70px'} style={{filter:"brightness(0) invert(1)"}} alt='logo' />

       <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>
                <FiShoppingCart />
                <p>{0}</p>
            </Link>
       </div>
    </nav>
  )
}

export default Header