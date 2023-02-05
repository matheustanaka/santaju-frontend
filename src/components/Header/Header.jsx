import styles from "./Header.module.css";
import ClientOrderButton from "../ClientOrderButton/ClientOrderButton";
import CreateProductButton from "../CreateProductButton/CreateProductButton";
import CreateOrderButton from "../CreateOrderButton/CreateOrderButton";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Gestão de Vendas</h1>
        <div className={styles.btns}>
          <ClientOrderButton />
          <CreateProductButton />
          <CreateOrderButton />
        </div>
      </header>
    </div>
  );
}
