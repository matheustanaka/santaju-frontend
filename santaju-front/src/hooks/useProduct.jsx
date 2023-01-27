import { createContext, useContext, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        title,
        setTitle,
        price,
        setPrice,
        products,
        setProducts,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  const {
    title,
    setTitle,
    price,
    setPrice,
    products,
    setProducts,
    fetchProducts,
  } = context;
  return {
    title,
    setTitle,
    price,
    setPrice,
    products,
    setProducts,
    fetchProducts,
  };
}
