import React,{createContext,useState} from "react";
import {USER_DATA} from "../data";
export const UserContext =createContext();

const UserContextProvider = ({children}) => {
    const [userdatas] = useState(USER_DATA);
    return (
        <UserContext.Provider value={{userdatas}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;