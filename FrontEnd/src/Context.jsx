import React, { useContext, useState } from 'react';
import all_Product from '../src/Component/Asset/all_product'

const ShopContext = React.createContext(); 

export const ShopProvider = ({children}) =>{
    const getProductValue = () =>{
        let cart = {};
        for(let index = 0; index < all_Product.length+1; index++){
            cart[index] = 0;
        }
        return cart;
      };
    const [cartItems, setCartItems] = useState(getProductValue())
    console.log(cartItems)
    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        console.log(cartItems)
    }
    console.log(addToCart)
    return <ShopContext.Provider value={{all_Product, addToCart}}>
        {children}
    </ShopContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(ShopContext)
}
