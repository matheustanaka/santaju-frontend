import styles from "./Dashboard.module.css";
import Table from "../Table/Table";

export default function Dashboard() {
  return (
    <div>
      <div className={styles.main}>
        <Table />
      </div>
    </div>
  );
}
