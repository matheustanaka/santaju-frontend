import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import styles from "./Order.module.css";

export default function Order() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <Card />
      </div>
    </div>
  );
}
