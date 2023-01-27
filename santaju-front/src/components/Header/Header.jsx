import styles from "./Header.module.css";
import NewOrderButton from "../NewOrderButton/NewOrderButton";
import CreateProductButton from "../CreateProductButton/CreateProductButton";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Gestão de Vendas</h1>
        <div className={styles.btns}>
          <NewOrderButton />
          <CreateProductButton />
        </div>
      </header>
    </div>
  );
}
