import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Table.module.css";

import EditIcon from "../EditIcon/EditIcon";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { useClient } from "../../hooks/useClient";

export default function Table() {
  const { clients, setClients } = useClient();

  const fetchClients = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/clients");
      setClients(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(clients);
    fetchClients();
  }, []);

  return (
    <table className={styles.table}>
      <tr>
        <th>Nome</th>
        <th>Telefone</th>
        <th></th>
      </tr>
      {clients.map((client) => (
        <tr key={client.id}>
          <td>{client.name}</td>
          <td>{client.phone}</td>
          <td className={styles.tableIcon}>
            <EditIcon client={client} fetchClients={fetchClients} />
            <DeleteIcon client={client} fetchClients={fetchClients} />
          </td>
        </tr>
      ))}
    </table>
  );
}
