import React from "react";
import { Modal } from "react-bootstrap";

const MyModal = ({ img, handleClose, show }) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false} size="xl">
      <Modal.Body className="text-center">
        <img className="img-fluid img-thumbnail" src={img} alt="" />
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
