import React, { createContext } from "react";
import custom_products from "../Assets/custom_products";


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {custom_products};
        
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
 );
}

export default ShopContextProvider;