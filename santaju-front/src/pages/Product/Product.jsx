import Header from "../../components/Header/Header";
import ProductTable from "../../components/ProductTable/ProductTable";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <ProductTable />
      </div>
    </div>
  );
}
