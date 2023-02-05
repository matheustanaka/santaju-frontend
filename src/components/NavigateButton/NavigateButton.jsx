import { useNavigate } from "react-router-dom";

import styles from "./NavigateButton.module.css";

export default function NavigateButton() {
  const navigate = useNavigate();
  const clientPage = () => navigate("/client");
  const productPage = () => navigate("/product");
  const orderPage = () => navigate("/order");

  return (
    <div>
      <div className={styles.btn_list}>
        <button className={styles.btn_navigate} onClick={clientPage}>
          Tabela de Clientes
        </button>
        <button className={styles.btn_navigate} onClick={productPage}>
          Tabela de Produtos
        </button>
        <button className={styles.btn_navigate} onClick={orderPage}>
          Lista de Pedidos
        </button>
      </div>
    </div>
  );
}
