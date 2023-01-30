import styles from "./ClientEditOrderModal.module.css";
import axios from "axios";
import { useClient } from "../../hooks/useClient";

export default function ClientEditOrderModal({
  open,
  onClose,
  client,
  fetchClients,
}) {
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
      await axios.put(`http://localhost:3000/api/client/${client.id}`, {
        name: name,
        phone: phone,
      });

      fetchClients();
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
                name="name"
                placeholder="Nome"
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
                placeholder="Telefone"
                onChange={handleChangePhone}
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
