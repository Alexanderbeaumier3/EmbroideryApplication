import React, { useState } from "react";
import './Navbar.css';

import logo from '../Assets/logo.webp';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {

const [menu, setMenu] = useState("shop");

    return (
        <nav className='navbar'>  {/* Changed div to nav for semantic HTML */}
            <div className="nav-logo">
                <img src={logo} alt="D&B Embroidery Logo" /> {/* Added meaningful alt text */}
                <p>D&B Embroidery</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li> {/* Consider changing hr to a span for styling the active element */}
                <li onClick={()=>{setMenu("customizable")}}>Customizable{menu==="customizable"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("pre-made")}}>Pre-Made{menu==="pre-made"?<hr/>:<></>}</li>
            </ul>
            <button className="nav-login">Login</button> {/* Moved Login button inside the div */}
            <div className="nav-cart">
                <img src={cart_icon} alt="Shopping Cart" /> {/* Added meaningful alt text */}
                <div className="nav-cart-count">0</div>
            </div>
        </nav>
    );
}

export default Navbar;
