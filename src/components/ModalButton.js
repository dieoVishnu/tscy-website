import React from "react";
const ModalButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button className="modal-button" ref={buttonRef} onClick={showModal}>
      {triggerText}
    </button>
  );
};
export default ModalButton;
