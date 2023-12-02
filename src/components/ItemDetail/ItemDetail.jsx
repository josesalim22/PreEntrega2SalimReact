import './ItemDetail.css';
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

     const [quantityAdded, setQuantityAdded] = useState(0)

     const { addItem } = useContext(CartContext)

     const handleOnAdd = (quantity) => {
          setQuantityAdded(quantity)

          const item = {
               id, name, price
          }

          addItem(item, quantity)

     }




     return (
          <article className='item-detail-card'>
               <header className='card-header'>
                    <h2 className='item-header'>
                         {name}
                    </h2>
               </header>
               <picture>
                    <img src={img} alt={name} className='item-img' />
               </picture>
               <section>
                    <p className='info'>
                         Categoria: {category}
                    </p>
                    <p className='info'>
                         Descripcion: {description}
                    </p>
                    <p className='info'>
                         Precio: ${price}
                    </p>
               </section>
               <footer className='item-footer'>
                    {
                         quantityAdded > 0 ? (
                              <Link to='/cart' className='option'>Terminar compra</Link>
                         ) : (
                              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                         )

                    }
               </footer>

          </article>


     )
}

export default ItemDetail