import React from "react";
import "./ModalWindow.css";

const ModalWindow = ({ handleClose, show, children, header }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="dashboard-page-header">
          <h2>{header}</h2>
          <span onClick={handleClose}>&times;</span>
        </div>
        <div className="modal-content">{children}</div>
      </section>
    </div>
  );
};

export default ModalWindow;
