import { useState, useEffect } from "react";
import { useClient } from "../../hooks/useClient";
import { useProduct } from "../../hooks/useProduct";
import { useOrder } from "../../hooks/useOrder";

import EditIcon from "../ClientEditIcon/EditIcon";
import OrderDeleteIcon from "../OrderDeleteIcon/OrderDeleteIcon";

import styles from "./Card.module.css";

export default function Card() {
  const { fetchOrders } = useOrder();
  const { clients, fetchClients } = useClient();
  const { fetchProducts } = useProduct();
  const [shows, setShows] = useState(Array(clients.length).fill(true));

  useEffect(() => {
    fetchClients();
    fetchProducts();
    fetchOrders();
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
              Lista de Pedidos
            </button>
            <div style={{ display: shows[index] ? "none" : "block" }}>
              <table className={styles.table}>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Editar</th>
                  <th>Deletar</th>
                </tr>
                {client.Order.map((order) => (
                  <tr key={order.id}>
                    <td>{order.product.title}</td>
                    <td>{order.product.price}</td>
                    <td>
                      <EditIcon
                        onClick={() => {
                          onEditClick(client);
                        }}
                      />
                    </td>
                    <td>
                      <OrderDeleteIcon order={order} />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
