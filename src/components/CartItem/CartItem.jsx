import './CartItem.css';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name, price, quantity }) => {

  const { removeItem } = useContext(CartContext);

  return (
    <div key={id} className="cart-item">
      <h3>{name}</h3>
      <div className="details">
        <span>Cantidad: {quantity}</span>
        <span>Precio x unidad: ${price}</span>
        <span>Precio total: ${price * quantity}</span>
        <button className='delete-button' onClick={() => removeItem(id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem