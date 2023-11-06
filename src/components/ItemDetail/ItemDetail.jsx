import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'; 

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada',quantity)} />
                    
               </footer>

          </article>


     )
}

export default ItemDetail