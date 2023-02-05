import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import HomeButton from "../../components/HomeButton/HomeButton";

import styles from "./Order.module.css";

export default function Order() {
  return (
    <div>
      <Header />
      <HomeButton />
      <div className={styles.main}>
        <Card />
      </div>
    </div>
  );
}
