import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

import styles from "./Client.module.css";

export default function Client() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <Table />
      </div>
    </div>
  );
}
