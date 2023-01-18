import styles from "./ButtonProduct.module.css";

export default function CreateProductButton() {
  return (
    <div>
      <button className={styles.button}>Criar um produto</button>
    </div>
  );
}
