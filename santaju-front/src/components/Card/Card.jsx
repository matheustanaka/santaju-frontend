import EditIcon from "../EditIcon/EditIcon";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

import styles from "./Card.module.css";

import { useState } from "react";

export default function Card() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className={styles.mainCard}>
        <div className={styles.buttons}>
          <EditIcon />
          <DeleteIcon />
        </div>
        <div className={styles.content}>
          <h2>Nome</h2>
          <h3>Resultado</h3>
          <h2>Telefone</h2>
          <h3>Resultado</h3>
          <button onClick={() => setShow(!show)}>Mais Detalhes</button>
          <div style={{ display: show ? "none" : "block" }}>
            <h2>Nome do produto</h2>
            <h3>Resultado</h3>
            <h2>Preço</h2>
            <h3>Resultado</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
