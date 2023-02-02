import { useState, useEffect } from "react";
import { useClient } from "../../hooks/useClient";
import { useProduct } from "../../hooks/useProduct";

import styles from "./Card.module.css";

export default function Card() {
  const { clients, fetchClients } = useClient();
  const { fetchProducts } = useProduct();
  const [shows, setShows] = useState(Array(clients.length).fill(true));

  useEffect(() => {
    fetchClients();
    fetchProducts();
  }, []);

  return (
    <div>
      {clients.map((client, index) => (
        <div className={styles.mainCard} key={client.id}>
          <div className={styles.content}>
            <div className={styles.headerClient}>
              <h2>Nome</h2>
              <h2>Telefone</h2>
            </div>
            <div className={styles.clientSection}>
              <h3>{client.name}</h3>
              <h3>{client.phone}</h3>
            </div>

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
