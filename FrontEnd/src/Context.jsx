import React, { useContext } from 'react';
import all_Product from '../src/Component/Asset/all_product'

const shopContext = React.createContext();
export const ShopProvider = ({children}) =>{
    <shopContext.Provider value={{all_Product}}>
        {children}
    </shopContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(shopContext)
}