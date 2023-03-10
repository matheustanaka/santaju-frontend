import { RiDeleteBin7Line } from "react-icons/ri";
import axios from "axios";
import styles from "./OrderDeleteIcon.module.css";
import { useOrder } from "../../hooks/useOrder";
import { useProduct } from "../../hooks/useProduct";
import { useClient } from "../../hooks/useClient";

export default function OrderDeleteIcon({ order }) {
  const { fetchOrders } = useOrder();
  const { fetchProducts } = useProduct();
  const { fetchClients } = useClient();
  const handleDeleteClient = async () => {
    try {
      await axios.delete(
        `https://santaju-backend-production.up.railway.app/api/order/${order.id}`
      );

      await fetchOrders();
      await fetchClients();
      await fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <RiDeleteBin7Line
        className={styles.deleteIcon}
        onClick={handleDeleteClient}
      />
    </div>
  );
}
