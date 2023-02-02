import { RiDeleteBin7Line } from "react-icons/ri";
import axios from "axios";
import styles from "./OrderDeleteIcon.module.css";
import { useOrder } from "../../hooks/useOrder";

export default function OrderDeleteIcon({ order }) {
  const { fetchOrders } = useOrder();
  const handleDeleteClient = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/order/${order.id}`);

      await fetchOrders();
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
