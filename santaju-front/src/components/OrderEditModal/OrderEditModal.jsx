import styles from "./OrderEditModal.module.css";
import { useOrder } from "../../hooks/useOrder";
import { useClient } from "../../hooks/useClient";
import { useProduct } from "../../hooks/useProduct";
import axios from "axios";

export default function OrderEditModal({ order, open, onClose }) {
  if (!open) return null;

  const { id_client, id_product, setId_Client, setId_Product, fetchOrders } =
    useOrder();
  const { clients, fetchClients } = useClient();
  const { products, fetchProducts } = useProduct();

  const handleChangeClient = (event) => {
    setId_Client(event.target.value);
  };

  const handleChangeProduct = (event) => {
    setId_Product(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:3000/api/order/${order.id}`, {
        id_product: id_product,
        id_client: id_client,
      });

      await fetchOrders();
      await fetchClients();
      await fetchProducts();
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
            <h2 className={styles.title}>Nome do Cliente</h2>
            <select onChange={handleChangeClient}>
              <option value="">Selecione um cliente</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
            <h2 className={styles.title}>Nome do Produto</h2>
            <select onChange={handleChangeProduct}>
              <option value="">Selecione um produto</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.title}
                </option>
              ))}
            </select>
            <button className={styles.btn} type="submit">
              Editar Pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
