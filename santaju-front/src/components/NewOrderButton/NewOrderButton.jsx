import styles from "./NewOrderButton.module.css";

import { useState } from "react";

import NewOrderModal from "../NewOrderModal/NewOrderModal";

export default function NewOrderButton() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button onClick={() => setOpenModal(true)} className={styles.createUser}>
        Novo Pedido
      </button>
      <NewOrderModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
