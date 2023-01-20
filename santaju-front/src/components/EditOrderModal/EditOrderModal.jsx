import styles from "./EditOrderModal.module.css";
// import { useState } from "react";
import axios from "axios";

export default function EditOrderModal({
  open,
  onClose,
  client,
  fetchClients,
}) {
  if (!open) return null;

  const handleUpdateClient = async (e) => {
    try {
      await axios.put(`http://localhost:3000/api/client/${client.id}`, {
        name: e.target.value,
        phone: e.target.value,
      });

      await fetchClients();
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
          <form className={styles.form} onSubmit={handleUpdateClient}>
            <label>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Nome"
                value={client.name}
                onChange={handleUpdateClient}
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                name="phone"
                value={client.phone}
                placeholder="Telefone"
                onChange={handleUpdateClient}
              />
            </label>
            <button className={styles.btn} type="submit">
              Atualizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
