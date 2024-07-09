import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutForm from "./pages/CheckoutForm";
import ShoppingCart from "./pages/ShoppingCart";
import Product from "./pages/Product";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Product />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
