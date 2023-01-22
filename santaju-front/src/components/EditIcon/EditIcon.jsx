import { FiEdit } from "react-icons/fi";
import EditOrderModal from "../EditOrderModal/EditOrderModal";
import { useState, useEffect } from "react";

import styles from "./EditIcon.module.css";
// import axios from "axios";

export default function EditIcon({ client, fetchClients, onClick }) {
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <div>
      <FiEdit
        className={styles.editIcon}
        onClick={() => {
          setOpenEditModal(true);
          onClick();
        }}
      />
      <EditOrderModal
        client={client}
        fetchClients={fetchClients}
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
      />
    </div>
  );
}
