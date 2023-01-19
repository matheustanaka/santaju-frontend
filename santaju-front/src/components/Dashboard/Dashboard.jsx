import styles from "./Dashboard.module.css";
import Table from "../Table/Table";
import axios from "axios";
import { useState } from "react";

export default function Dashboard() {
  const [client, setClient] = useState({ name: "", phone: "" });

  const handleChange = (event) => {
    const { name, phone, value } = event.target;
    setClient({ ...client, [name]: value, [phone]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/client",
        client
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={styles.main}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={client.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={client.phone}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Create</button>
        </form>

        <Table />
      </div>
    </div>
  );
}
