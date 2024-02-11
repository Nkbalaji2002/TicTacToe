import React from "react";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <>
      <div id={id || "Modal"} className="modal">
        <div className="modal-content">
          <div className="header">
            <span className="close-modal-icon" onClick={onClose}>
              &times;
            </span>
            <h2>{header ? header : "Header"}</h2>
          </div>

          <div className="body">
            {body ? (
              body
            ) : (
              <>
                <p>This is our Modal Body</p>
              </>
            )}
          </div>

          <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;