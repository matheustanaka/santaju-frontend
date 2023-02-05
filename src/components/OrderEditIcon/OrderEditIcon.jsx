import { FiEdit } from "react-icons/fi";
import OrderEditModal from "../OrderEditModal/OrderEditModal";
import { useState } from "react";

import styles from "./OrderEditIcon.module.css";

export default function OrderEditIcon({ order, onClick }) {
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
      <OrderEditModal
        order={order}
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
      />
    </div>
  );
}
