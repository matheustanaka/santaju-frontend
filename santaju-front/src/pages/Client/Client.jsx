import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import HomeButton from "../../components/HomeButton/HomeButton";

import styles from "./Client.module.css";

export default function Client() {
  return (
    <div>
      <Header />
      <HomeButton />
      <div className={styles.main}>
        <Table />
      </div>
    </div>
  );
}
