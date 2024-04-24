import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

export default function App() {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={Cart} path="/cart" />
    </Routes>
  );
}
