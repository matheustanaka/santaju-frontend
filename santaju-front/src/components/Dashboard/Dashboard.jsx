import styles from "./Dashboard.module.css";
// import Table from "../Table/Table";
import Card from "../Card/Card";

export default function Dashboard() {
  return (
    <div>
      <div className={styles.main}>
        <Card />
        {/* <Table /> */}
      </div>
    </div>
  );
}
