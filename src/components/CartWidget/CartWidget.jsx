import React from 'react';
import cart from './assets/cart.png';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className='cart-widget'>
        <img src={cart} alt="cart-widget" className='cart-icon' />
        <span className='cart-count'>0</span>

    </div>
  )
}

export default CartWidget