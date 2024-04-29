import React, { useState } from "react";
import './Navbar.css';

import logo from '../Assets/logo.webp';
import cart_icon from '../Assets/cart_icon.png';

import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <nav className='navbar'>  
            <div className="nav-logo">
                <img src={logo} alt="D&B Embroidery Logo" /> 
                <p>D&B Embroidery</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop{menu === "shop" ? <hr /> : null}</Link>
                    
                </li>
                <li onClick={() => { setMenu("customizable") }}>
                    <Link style={{ textDecoration: 'none' }} to='/customizable'>Customizable{menu === "customizable" ? <hr /> : null}</Link>
                </li>
                <li onClick={() => { setMenu("pre-made") }}>
                    <Link style={{ textDecoration: 'none' }} to='/pre-made'>Pre-Made{menu === "pre-made" ? <hr /> : null}</Link>
                </li>
            </ul>
            <Link to='/login'>
                <button className="nav-login">Login</button>
            </Link>
            <div className="nav-cart">
                <Link to='/cart'>
                    <img src={cart_icon} alt="Shopping Cart" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </nav>
    );
}

export default Navbar;
