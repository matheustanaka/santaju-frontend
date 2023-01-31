import { useNavigate } from "react-router-dom";

import styles from "./HomeButton.module.css";

export default function HomeButton() {
  const navigate = useNavigate();
  const homePage = () => navigate("/");
  return (
    <div>
      <button className={styles.backHome} onClick={homePage}>
        Voltar para Página Inicial
      </button>
    </div>
  );
}
