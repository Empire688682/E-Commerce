import React, { useContext, useState } from 'react';
import all_Product from '../src/Component/Asset/all_product'

const ShopContext = React.createContext(); 
const getDefaultValue = () =>{
    let cart = {};
    for(let index = 0; index < all_Product.length; index++){
        cart[index] = 0;
    }
    return cart;
}
export const ShopProvider = ({children}) =>{

    const [cartItems, setCartItems] = useState(getDefaultValue());

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId]+1 }));
        console.log(cartItems);
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId]-1 }))
    }

    const getcartValue = () =>{
        let number = 0;
        for(let total in cartItems){
            number += cartItems[total]
        }
        return number
    }

    const getSubTotal = () =>{
        let number = 0;
        for(const total in cartItems){
            if(cartItems[total] > 0){
                let totalInfo = all_Product.find((product)=> product.id === Number(total));
                number += totalInfo.new_price * cartItems[total];
            }
        }
        return number
    }

    return <ShopContext.Provider value={{getSubTotal,getcartValue,all_Product,addToCart,removeFromCart,cartItems}}>
        {children}
    </ShopContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(ShopContext)
}
