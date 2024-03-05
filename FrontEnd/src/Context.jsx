import React, { useContext } from 'react';
import all_Product from '../src/Component/Asset/all_product'

const ShopContext = React.createContext();

export const ShopProvider = ({children}) =>{
    return <ShopContext.Provider value={{all_Product}}>
        {children}
    </ShopContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(ShopContext)
}
