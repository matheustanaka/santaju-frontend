import { RiDeleteBin7Line } from "react-icons/ri";
import axios from "axios";

import styles from "./DeleteIcon.module.css";

export default function DeleteIcon({ client, fetchClients }) {
  const handleDeleteClient = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/client/${client.id}`);

      await fetchClients();
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
