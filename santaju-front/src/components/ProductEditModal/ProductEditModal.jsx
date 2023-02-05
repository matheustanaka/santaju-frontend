import styles from "./ProductEditModal.module.css";
import axios from "axios";
import { useProduct } from "../../hooks/useProduct";

export default function ProductEditModal({
  open,
  onClose,
  product,
  fetchProducts,
}) {
  if (!open) return null;

  const { title, price, setTitle, setPrice } = useProduct();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `https://santaju-backend-production.up.railway.app/api/product/${product.id}`,
        {
          title: title,
          price: price,
        }
      );

      fetchProducts();
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
              Atualizar Produto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
