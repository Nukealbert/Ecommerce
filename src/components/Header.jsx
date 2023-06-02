import React from 'react';
import img from '../assets/logo.png'
import { Link } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'
import { useSelector } from 'react-redux';

function Header() {
  const {cartItems} =useSelector(state=>state.cart)
  return (
    <nav>
       <img src={img} height={'70px'} style={{filter:"brightness(0) invert(1)"}} alt='logo' />

       <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>
                <FiShoppingCart />
                <p>{cartItems.length}</p>
            </Link>
       </div>
    </nav>
  )
}

export default Header