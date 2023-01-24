import styles from "./ProductModal.module.css";
import { useClient } from "../../hooks/useClient";
import axios from "axios";

export default function ProductModal({ open, onClose }) {
  if (!open) return null;

  const { name, phone, setName, setPhone } = useClient();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/client", {
        name: name,
        phone: phone,
      });
      console.log(response.data);
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
          X
        </p>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Título do Produto"
                value={name}
                onChange={handleChangeName}
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                name="phone"
                value={phone}
                placeholder="Preco"
                onChange={handleChangePhone}
              />
            </label>
            <button className={styles.btn} type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
