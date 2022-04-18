const userReducer = (state, action) => {
    switch(action.type){
        case 'GET_USER':
            return{
                ...state,
                userData: action.payload
            }
        case 'SET_LOADING':
                return {
                    ...state,
                    loading: true
                }
    }

}