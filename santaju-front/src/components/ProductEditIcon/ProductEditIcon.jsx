import { FiEdit } from "react-icons/fi";
import ClientEditOrderModal from "../ClientEditOrderModal/ClientEditOrderModal";
import { useState } from "react";

import styles from "./ProductEditIcon.module.css";

export default function ProductEditIcon({ product, fetchProducts, onClick }) {
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
        product={product}
        fetchClients={fetchProducts}
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
      />
    </div>
  );
}
