import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
const Item = ({ id, name, img, price, stock }) => {

    return (
        <article className='card-item'>
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
                    Precio: ${price}
                </p>
                <p className='info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='item-footer'>
                {/* <button className='Option'>Ver detalle</button> */}
                <Link to={`/item/${id}`} className='option'>Ver detalle</Link>
            </footer>
        </article>

    )
}

export default Item