import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to ='/'>
                <h3 className="logo">Tienda Digital Dreams</h3>
            </Link>
            <div className="nav-links">

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