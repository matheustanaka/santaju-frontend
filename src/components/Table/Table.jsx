import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Table.module.css";

import EditIcon from "../ClientEditIcon/EditIcon";
import DeleteIcon from "../ClientDeleteIcon/DeleteIcon";
import { useClient } from "../../hooks/useClient";

export default function Table() {
  const { clients, setClients, setName, setPhone } = useClient();

  const fetchClients = async () => {
    try {
      const { data } = await axios.get(
        "https://santaju-backend-production.up.railway.app/api/clients"
      );
      setClients(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onEditClick = (client) => {
    setName(client.name);
    setPhone(client.phone);

    console.log(client);
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
        <th>Editar</th>
        <th>Deletar</th>
      </tr>
      {clients.map((client) => (
        <tr key={client.id}>
          <td>{client.name}</td>
          <td>{client.phone}</td>
          <td>
            <EditIcon
              client={client}
              fetchClients={fetchClients}
              onClick={() => {
                onEditClick(client);
              }}
            />
          </td>
          <td>
            <DeleteIcon client={client} fetchClients={fetchClients} />
          </td>
        </tr>
      ))}
    </table>
  );
}
