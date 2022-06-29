import { GlobalProvider } from "./Context/GlobalState";
import ProductList from './Component/ProductList/ProductList'
import SearchBox from './Component/SearchBox/SearchBox'
import { PopupProvider } from 'react-hook-popup';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <PopupProvider>
        <div className="searchApp">
          <h3>Search App</h3>
          <SearchBox />
          <ProductList />
        </div>
      </PopupProvider>
    </GlobalProvider>
  );
}

export default App;
