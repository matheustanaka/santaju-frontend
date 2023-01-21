import { createContext, useContext, useState } from "react";
import axios from "axios";

const ClientContext = createContext();

export default function ClientProvider({ children }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/clients");
      setClients(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        name,
        setName,
        phone,
        setPhone,
        clients,
        setClients,
        fetchClients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  const context = useContext(ClientContext);
  const { name, setName, phone, setPhone, clients, setClients, fetchClients } =
    context;
  return { name, setName, phone, setPhone, clients, setClients, fetchClients };
}
