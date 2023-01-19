import styles from "./Header.module.css";
import NewOrderButton from "../NewOrderButton/NewOrderButton";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Gestão de Vendas</h1>
        <NewOrderButton />
      </header>
    </div>
  );
}
