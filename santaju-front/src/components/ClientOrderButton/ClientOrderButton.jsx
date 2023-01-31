import styles from "./ClientOrderButton.module.css";

import { useState } from "react";

import { useClient } from "../../hooks/useClient";

import ClientOrderModal from "../ClientOrderModal/ClientOrderModal";

export default function ClientOrderButton() {
  const [openModal, setOpenModal] = useState(false);

  const { name, phone, setName, setPhone } = useClient();

  const onClickButton = () => {
    setName("");
    setPhone("");
    setOpenModal(true);
  };

  const onClose = () => {
    setName("");
    setPhone("");
    setOpenModal(false);
  };

  return (
    <div>
      <button onClick={onClickButton} className={styles.createUser}>
        Cadastrar Cliente
      </button>
      <ClientOrderModal open={openModal} onClose={onClose} />
    </div>
  );
}
