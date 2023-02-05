import Header from "../../components/Header/Header";
import ProductTable from "../../components/ProductTable/ProductTable";
import HomeButton from "../../components/HomeButton/HomeButton";

import styles from "./Product.module.css";

export default function Product() {
  return (
    <div>
      <Header />
      <HomeButton />
      <div className={styles.main}>
        <ProductTable />
      </div>
    </div>
  );
}
