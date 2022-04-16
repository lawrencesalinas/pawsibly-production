import { createContext, useReducer } from "react";
import sitterReducer from "./SitterReducer";

const SitterContext = createContext();

export const SitterProvider = ({children}) => {
    const initialSate = {
        sitters: [],
        sitter: {},
        loading: false,
    };

    const [state, dispatch] = useReducer(sitterReducer, initialSate);

    return (
        <SitterContext.Provider
            value={{
                dispatch,
                ...state,
            }}
        >
            {children}
        </SitterContext.Provider>
    );
};

export default SitterContext
