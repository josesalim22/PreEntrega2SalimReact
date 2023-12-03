import cart from './assets/cart.png';
import './CartWidget.css';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    /*  <div className='cart-widget'>
         <img src={cart} alt="cart-widget" className='cart-icon' />
         <span className='cart-count'>0</span>
         style={{ display: totalQuantity > 0 ? 'block' : 'none' }}
     </div> */
    <div>
      <Link to='/cart' className='cart-widget' style={{ display: totalQuantity() > 0 ? 'block' : 'none' }}>
        <img src={cart} alt="cart-widget" className='cart-icon' />
        <span className='cart-count'>{totalQuantity()}</span>
      </Link>
    </div>
  )
}

export default CartWidget