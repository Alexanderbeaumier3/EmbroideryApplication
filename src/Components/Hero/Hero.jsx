import React from "react";
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-content'>
                <h1 className='hero-title'>Be Your Own Brand</h1>
                <p className='hero-tagline'>Discover our latest collection and make a statement with your style.</p>
                <button className='hero-button'>Latest Collection</button>
            </div>
        </div>
    );
}

export default Hero;
