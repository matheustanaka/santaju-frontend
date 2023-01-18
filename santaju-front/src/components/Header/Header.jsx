import styles from "./Header.module.css";

import CreateProductButton from "../CreateProductButton/CreateProductButton";
import CreateUserButton from "../CreateUserButton/CreateUserButton";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <CreateProductButton />
        <CreateUserButton />
      </header>
    </div>
  );
}
