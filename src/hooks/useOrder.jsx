import { createContext, useContext, useState } from "react";
import axios from "axios";

const OrderContext = createContext();

export default function OrderProvider({ children }) {
  const [id_client, setId_Client] = useState(0);
  const [id_product, setId_Product] = useState(0);
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(
        "https://santaju-backend-production.up.railway.app/api/orders"
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        id_client,
        setId_Client,
        id_product,
        setId_Product,
        orders,
        setOrders,
        fetchOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  const {
    id_client,
    setId_Client,
    id_product,
    setId_Product,
    orders,
    setOrders,
    fetchOrders,
  } = context;
  return {
    id_client,
    setId_Client,
    id_product,
    setId_Product,
    orders,
    setOrders,
    fetchOrders,
  };
}
