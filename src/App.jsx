import './App.css';
import { GlobalRouter } from './router/GlobalRouter';
import { AppContext } from '../src/context/AppContext';
import books from './data/book-info.json';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <AppContext.Provider value={{books, cartItems, setCartItems, searchQuery, setSearchQuery}}>
                <GlobalRouter></GlobalRouter>
            </AppContext.Provider>
        </>
    );
}

export default App
