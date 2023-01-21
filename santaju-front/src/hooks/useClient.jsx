import { createContext, useContext, useState } from "react";

const ClientContext = createContext();

export default function ClientProvider({ children }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [clients, setClients] = useState([]);

  return (
    <ClientContext.Provider
      value={{
        name,
        setName,
        phone,
        setPhone,
        clients,
        setClients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export function useClient() {
  const context = useContext(ClientContext);
  const { name, setName, phone, setPhone, clients, setClients } = context;
  return { name, setName, phone, setPhone, clients, setClients };
}
