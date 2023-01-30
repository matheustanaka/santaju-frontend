import "./styles.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

import ClientProvider from "./hooks/useClient";
import ProductProvider from "./hooks/useProduct";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Client from "./pages/Client/Client";
import Product from "./pages/Product/Product";
import Order from "./pages/Order/Order";

function App() {
  return (
    <BrowserRouter>
      <ClientProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client" element={<Client />} />
            <Route path="/product" element={<Product />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </ProductProvider>
      </ClientProvider>
    </BrowserRouter>
  );
}

export default App;
