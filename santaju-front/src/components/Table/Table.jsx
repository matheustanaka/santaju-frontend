import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Table.module.css";

export default function Table() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/clients");
        setClients(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <table className={styles.table}>
      <tr>
        <th>Nome</th>
        <th>Telefone</th>
        <th>Produto</th>
      </tr>
      {clients.map((client) => (
        <tr key={client.id}>
          <td>{client.name}</td>
          <td>{client.phone}</td>
        </tr>
      ))}
    </table>
  );
}
