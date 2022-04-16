const sitterReducer = (state, action ) => {
    switch(action.type){
        case 'GET_SITTERS':
            return{
                ...state, 
                sitters: action.payload,
                loading: false
            }
        case 'GET_SITTER':
            return{
                ...state,
                sitter:action.payload,
                loading: false
            }
            
    }
}