import { RiDeleteBin7Line } from "react-icons/ri";
import axios from "axios";
import styles from "./OrderDeleteIcon.module.css";

export default function OrderDeleteIcon({ orders, fetchOrders }) {
  const handleDeleteClient = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/order/${orders.id}`);

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
