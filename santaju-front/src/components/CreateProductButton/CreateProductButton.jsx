import styles from "./CreateProductButton.module.css";
import ProductModal from "../ProductModal/ProductModal";
import { useState } from "react";
import { useProduct } from "../../hooks/useProduct";

export default function CreateProductButton() {
  const { setTitle, setPrice } = useProduct();
  const [openModal, setOpenModal] = useState(false);

  const onClickButton = () => {
    setTitle("");
    setPrice("");
    setOpenModal(true);
  };

  const onClose = () => {
    setTitle("");
    setPrice("");
    setOpenModal(false);
  };
  return (
    <div>
      <button onClick={onClickButton} className={styles.createProduct}>
        Cadastrar Produto
      </button>
      <ProductModal open={openModal} onClose={onClose} />
    </div>
  );
}
