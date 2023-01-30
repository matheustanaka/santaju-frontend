import axios from "axios";
import { useEffect } from "react";
import styles from "./ProductTable.module.css";

import ProductEditIcon from "../ProductEditIcon/ProductEditIcon";
import ProductDeleteIcon from "../ProductDeleteIcon/ProductDeleteIcon";
import { useProduct } from "../../hooks/useProduct";

export default function ProductTable() {
  const { products, setProducts, setTitle, setPrice } = useProduct();

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onEditClick = (product) => {
    setTitle(product.title);
    setPrice(product.price);

    console.log(product);
  };

  useEffect(() => {
    console.log(products);
    fetchProducts();
  }, []);

  return (
    <table className={styles.table}>
      <tr>
        <th>Nome</th>
        <th>Telefone</th>
        <th>Editar</th>
        <th>Deletar</th>
      </tr>
      {products.map((product) => (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>R$ {product.price}</td>
          <td>
            <ProductEditIcon
              product={product}
              fetchProducts={fetchProducts}
              onClick={() => {
                onEditClick(product);
              }}
            />
          </td>
          <td>
            <ProductDeleteIcon
              product={product}
              fetchProducts={fetchProducts}
            />
          </td>
        </tr>
      ))}
    </table>
  );
}
