import { useState } from "react";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";

import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
  <Nav page={page} setPage={setPage} cartCount={cartCount} />
  <main>
    {page === "home" && <Home setPage={setPage} />}
    {page === "menu" && <Menu cart={cart} setCart={setCart} />}
    {page === "cart" && <Cart cart={cart} setCart={setCart} setPage={setPage} />}
    {page === "checkout" && <Checkout cart={cart} setCart={setCart} setPage={setPage} />}
    {page === "reservation" && <Reservation />}
  </main>

  <Footer />
    
    </div>
  );
}
