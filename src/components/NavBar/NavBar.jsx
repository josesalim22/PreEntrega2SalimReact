import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to ='/'>
                <h3>Tienda</h3>
            </Link>
            <div>

                {/*   <button>Celulares</button>
                <button>Tablet</button>
                <button>Notebook</button> */}
                <NavLink to={`/category/celular`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
                <NavLink to={`/category/notebook`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar