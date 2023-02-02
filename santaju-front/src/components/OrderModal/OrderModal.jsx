import styles from "./OrderModal.module.css";
import { useOrder } from "../../hooks/useOrder";
import { useClient } from "../../hooks/useClient";
import { useProduct } from "../../hooks/useProduct";
import { useEffect } from "react";
import axios from "axios";

export default function OrderModal({ open, onClose }) {
  if (!open) return null;

  const { id_client, id_product, setId_Client, setId_Product, fetchOrders } =
    useOrder();
  const { clients, fetchClients } = useClient();
  const { products, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChangeClient = (event) => {
    setId_Client(event.target.value);
  };

  const handleChangeProduct = (event) => {
    setId_Product(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3000/api/order", {
        id_product: id_product,
        id_client: id_client,
      });

      fetchOrders();
      fetchClients();
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={onClose} className={styles.overlay}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.modalContainer}
      >
        <p className={styles.closeBtn} onClick={onClose}>
          Fechar
        </p>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="client">Nome do Cliente</label>
            <select value={id_client} onChange={handleChangeClient}>
              {clients.map((client) => (
                <option value={client.id}>{client.name}</option>
              ))}
            </select>

            <label htmlFor="product">Nome do Produto</label>
            <select value={id_product} onChange={handleChangeProduct}>
              {products.map((product) => (
                <option value={product.id}>{product.title}</option>
              ))}
            </select>
            <button className={styles.btn} type="submit">
              Criar Pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
