import { createContext, useContext, useState } from "react";
const UserContext = createContext(undefined)

export const UserProvider = ({ children }) => {
    const [user]= useState({
        name: "John",
        email: "john@gmail.com",
        dob: "11/02/2019"
    })
    
    
    return (<UserContext.Provider value={{user}}>

    </UserContext.Provider>)
}
export const useUser = () => useContext(UserContext);