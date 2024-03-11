import React, { useContext } from 'react';
import all_Product from '../src/Component/Asset/all_product'

const ShopContext = React.createContext();

export const ShopProvider = ({children}) =>{
    const getDefaultValue = () =>{
        let cart = {};
        for(let index = 0; index < all_Product.length; index++){
        cart[index]= 0; 
        }
        return cart
    }
    return <ShopContext.Provider value={{all_Product,getDefaultValue}}>
        {children}
    </ShopContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(ShopContext)
}
