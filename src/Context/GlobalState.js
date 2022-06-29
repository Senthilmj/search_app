import { appReducer } from "./AppReducer";
const { useReducer, createContext } = require("react");
const initialState = {
  productList: [],
  searchTerm: 'iphone'

};

export const globalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const searchText = (searchTerm) => {
    dispatch({
      type: "SET_SEARCH",
      searchTerm
    });
  };

  const setProductList = (productList) => {
    dispatch({
      type: "PRODUCT_LIST",
      productList
    });
  };

  return (
    <globalContext.Provider
      value={{
        state,
        searchText,
        setProductList
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
