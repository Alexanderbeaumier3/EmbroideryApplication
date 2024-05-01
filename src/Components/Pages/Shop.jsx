import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers";
import PreMade from "../PreMade/PreMade";

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <PreMade/>
        </div>
    );
}

export default Shop;