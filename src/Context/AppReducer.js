export const appReducer = (state, action) => {
    switch (action.type) {
        case "PRODUCT_LIST":
            return {
                ...state,
                productList: [...action.productList]
            };
        case "SET_SEARCH":
            return {
                ...state,
                searchTerm: action.searchTerm
            };
        default:
            return state;
    }
};
