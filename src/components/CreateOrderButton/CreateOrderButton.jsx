import styles from "./CreateOrderButton.module.css";

import { useState } from "react";

import { useClient } from "../../hooks/useClient";

import OrderModal from "../OrderModal/OrderModal";

export default function CreateOrderButton() {
  const [openModal, setOpenModal] = useState(false);

  const { name, phone, setName, setPhone } = useClient();

  const onClickButton = () => {
    // setName("");
    // setPhone("");
    setOpenModal(true);
  };

  const onClose = () => {
    // setName("");
    // setPhone("");
    setOpenModal(false);
  };

  return (
    <div>
      <button onClick={onClickButton} className={styles.createUser}>
        Cadastrar Pedido
      </button>
      <OrderModal open={openModal} onClose={onClose} />
    </div>
  );
}
