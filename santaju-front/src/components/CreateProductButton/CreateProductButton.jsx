import styles from "./CreateProductButton.module.css";
import ProductModal from "../ProductModal/ProductModal";
import { useState } from "react";

export default function CreateProductButton() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className={styles.createProduct}
      >
        Cadastrar Produto
      </button>
      <ProductModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
