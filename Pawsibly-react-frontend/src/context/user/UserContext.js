import { createContext, useReducer } from "react";
import userReducer from './UserReducer'


const UserContext = createContext()

export const UserProvider = ({children}) => {
    const initialState = {
        userData: {},
        loading:false
    }
    const [state, dispatch] = useReducer(userReducer , initialState)

    return(
        <UserContext.Provider 
        value={{
            dispatch,
            ...state
        }}
    >
    {children}
    </UserContext.Provider>
    )
}

export default UserContext