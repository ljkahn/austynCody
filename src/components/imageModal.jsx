import React from "react";
import Modal from "react-bootstrap/Modal";

const ImageModal = ({ show, onHide, imageSrc }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body
        className="text-center p-0"
        style={{ backgroundColor: "#1d1d1d" }}
      >
        <img
          src={imageSrc}
          alt="Large version of the image"
          className="img-fluid"
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            imageRendering: "optimizeQuality",
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
