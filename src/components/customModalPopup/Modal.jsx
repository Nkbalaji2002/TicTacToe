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
            <h3>{header ? header : "Header"}</h3>
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

          <div className="footer">{footer ? footer : <h4>Footer</h4>}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
