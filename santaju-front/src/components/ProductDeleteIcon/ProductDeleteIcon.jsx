import { RiDeleteBin7Line } from "react-icons/ri";
import axios from "axios";
import styles from "./ProductDeleteIcon.module.css";

export default function ProductDeleteIcon({ product, fetchProducts }) {
  const handleDeleteProduct = async () => {
    try {
      await axios.delete(
        `https://santaju-backend-production.up.railway.app/api/product/${product.id}`
      );

      await fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <RiDeleteBin7Line
        className={styles.deleteIcon}
        onClick={handleDeleteProduct}
      />
    </div>
  );
}
