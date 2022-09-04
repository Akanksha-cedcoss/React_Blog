import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./Conponants/Account";
import Blogs from "./Conponants/Blogs";
import Navigations from "./Conponants/Navigations";
import Wishlist from "./Conponants/Wishlist";

export let Context = createContext();

function App() {
  let [wishList, setWishlist] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <Context.Provider value={{ wishList, setWishlist }}>
          <Routes>
            <Route path="/" element={<Navigations />} >
              <Route index element={ <Blogs /> } />
              <Route path='/wishlist' element={ <Wishlist /> } />
              <Route path='/account' element={ <Account /> } />
            </Route>
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
