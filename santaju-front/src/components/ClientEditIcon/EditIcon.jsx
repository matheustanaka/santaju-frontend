import { FiEdit } from "react-icons/fi";
import ClientEditOrderModal from "../ClientEditOrderModal/ClientEditOrderModal";
import { useState } from "react";

import styles from "./EditIcon.module.css";

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
      <ClientEditOrderModal
        client={client}
        fetchClients={fetchClients}
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
      />
    </div>
  );
}
