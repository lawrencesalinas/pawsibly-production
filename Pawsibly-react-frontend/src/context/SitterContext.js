import {createContext, useReducer} from 'react'

const SitterContext = createContext()
const initialSate = {
    sitters: [],
    sitter: {},
    loading: false
}

// const [state, dispatch] = useReducer