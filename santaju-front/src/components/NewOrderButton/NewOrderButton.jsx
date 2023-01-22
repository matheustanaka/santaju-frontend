import styles from "./NewOrderButton.module.css";

import { useState } from "react";

import { useClient } from "../../hooks/useClient";

import NewOrderModal from "../NewOrderModal/NewOrderModal";

export default function NewOrderButton() {
  const [openModal, setOpenModal] = useState(false);

  const { name, phone, setName, setPhone } = useClient();

  const onClose = () => {
    setName("");
    setPhone("");
    setOpenModal(false);
  };

  return (
    <div>
      <button onClick={() => setOpenModal(true)} className={styles.createUser}>
        Novo Pedido
      </button>
      <NewOrderModal open={openModal} onClose={onClose} />
    </div>
  );
}
