import EditIcon from "../ClientEditIcon/EditIcon";
import DeleteIcon from "../ClientDeleteIcon/DeleteIcon";

import styles from "./Card.module.css";

import { useState, useEffect } from "react";
import { useClient } from "../../hooks/useClient";

export default function Card() {
  const { clients, fetchClients } = useClient();
  const [shows, setShows] = useState(Array(clients.length).fill(true));

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      {clients.map((client, index) => (
        <div className={styles.mainCard} key={client.id}>
          <div className={styles.buttons}>
            <EditIcon />
            <DeleteIcon />
          </div>
          <div className={styles.content}>
            <h2>Nome</h2>
            <h3>{client.name}</h3>
            <h2>Telefone</h2>
            <h3>{client.phone}</h3>
            <button
              className={styles.details}
              onClick={() =>
                setShows((prevShows) => {
                  const newShows = [...prevShows];
                  newShows[index] = !newShows[index];
                  return newShows;
                })
              }
            >
              Mais Detalhes
            </button>
            <div style={{ display: shows[index] ? "none" : "block" }}>
              <div className={styles.headerProduct}>
                <h2>Nome do produto</h2>
                <h2>Preço</h2>
              </div>
              {client.Order.map((order) => (
                <div className={styles.productSection} key={order.id}>
                  <h3>{order.product.title}</h3>
                  <h3>R$ {order.product.price}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
