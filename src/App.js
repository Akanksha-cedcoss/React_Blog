import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Conponants/Blogs";
import Navigations from "./Conponants/Navigations";
import ReadMore from "./Conponants/ReadMore";
import Wishlist from "./Conponants/Liked";
import Contact from "./Conponants/Contact";
import About from "./Conponants/About";

export let Context = createContext();

function App() {
  let [wishList, setWishlist] = useState(0);
  let [ blog, setBlog ] = useState("");
  let [ isLogin, setLogin ] = useState(false);
  const [ menuDrawer, setMenuDrawer ] = useState(false);
  
  return (
    <div>
      <BrowserRouter>
        <Context.Provider value={{ wishList, setWishlist, blog, setBlog, isLogin, setLogin, menuDrawer, setMenuDrawer }}>
          <Routes>
            <Route path="/" element={<Navigations />} >
              <Route index element={ <Blogs /> } />
              <Route path='/wishlist' element={ <Wishlist /> } />
              <Route path="/readmore" element={ <ReadMore /> } />
              <Route path='/contact' element={ <Contact /> } />
              <Route path="/about" element={ <About /> } />
            </Route>
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
