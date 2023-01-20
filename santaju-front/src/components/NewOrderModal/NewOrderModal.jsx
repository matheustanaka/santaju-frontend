import styles from "./NewOrderModal.module.css";
import { useState } from "react";
import axios from "axios";

export default function NewOrderModal({ open, onClose }) {
  if (!open) return null;

  const [client, setClient] = useState({ name: "", phone: "" });

  const handleChange = (event) => {
    const { name, phone, value } = event.target;
    setClient({ ...client, [name]: value, [phone]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/client",
        client
      );
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
                placeholder="Nome"
                value={client.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                name="phone"
                value={client.phone}
                placeholder="Telefone"
                onChange={handleChange}
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
