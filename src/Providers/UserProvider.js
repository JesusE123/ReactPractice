import { createContext, useState, useContext } from "react"
const UserContext = createContext();
const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const erp = useContext(UserContext);
    return erp
}

export {UserProvider, useUserContext}