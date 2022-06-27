import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductContextProvider } from "./store/context/ProductContext";
import { CartContextProvider } from "./store/context/CartContext";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Products />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
