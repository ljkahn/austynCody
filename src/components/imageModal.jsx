import React from "react";
import Modal from "react-bootstrap/Modal";

const ImageModal = ({ show, onHide, imageSrc }) => {
  return (
    <Modal show={show} onHide={onHide} centered className="modal">
      <Modal.Body className="text-center p-0">
        <img
          src={imageSrc}
          alt="Large version of the image"
          className="img-fluid"
          style={{ maxWidth: "100%", maxHeight: "80vh" }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
