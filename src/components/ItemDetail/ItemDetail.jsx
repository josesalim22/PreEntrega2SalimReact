import './ItemDetail.css';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

     const [quantityAdded, setQuantityAdded] = useState(0)

     const handleOnAdd = (quantity) => {
          setQuantityAdded(quantity)

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