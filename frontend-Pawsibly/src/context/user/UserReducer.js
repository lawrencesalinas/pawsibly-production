const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        userData: action.payload,
        loading: false
      };
    case "GET_REVIEW":
        return{
            ...state,
            reviewList: action.payload,
            loading: false
        }
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
