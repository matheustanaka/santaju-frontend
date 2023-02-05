import Header from "../../components/Header/Header";
import NavigateButton from "../../components/NavigateButton/NavigateButton";

import styles from "./Home.module.css";
export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <NavigateButton />
      </div>
    </div>
  );
}
