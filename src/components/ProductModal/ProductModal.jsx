import styles from "./ProductModal.module.css";
import { useProduct } from "../../hooks/useProduct";
import axios from "axios";

export default function ProductModal({ open, onClose }) {
  if (!open) return null;

  const { title, price, setTitle, setPrice, fetchProducts } = useProduct();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "https://santaju-backend-production.up.railway.app/api/product",
        {
          title: title,
          price: price,
        }
      );
      console.log(data);

      fetchProducts();

      setTitle("");
      setPrice("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={onClose} className={styles.overlay}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.modalContainer}
      >
        <p className={styles.closeBtn} onClick={onClose}>
          Fechar
        </p>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              <input
                className={styles.input}
                type="text"
                name="title"
                placeholder="Título do Produto"
                value={title}
                onChange={handleChangeTitle}
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                name="price"
                value={price}
                placeholder="Preço"
                onChange={handleChangePrice}
              />
            </label>
            <button className={styles.btn} type="submit">
              Cadastrar Produto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
