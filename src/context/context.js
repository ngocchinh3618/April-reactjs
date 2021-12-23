import React,{createContext,useState} from "react";
import {CARD_DATA} from "../data";
export const CardContext =createContext();

const CardContextProvider = ({children}) => {
    const [datas] = useState(CARD_DATA);
    return (
        <CardContext.Provider value={{datas}}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;

