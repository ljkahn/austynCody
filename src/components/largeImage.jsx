function ImageModal({ selectedImage, onHide }) {
  return (
    selectedImage && (
      <div className="large-image-modal">
        <div className="modal-content">
          <img src={selectedImage} alt="Large Image" />
          <button onClick={onHide}>Close</button>
        </div>
      </div>
    )
  );
}
export default ImageModal;
