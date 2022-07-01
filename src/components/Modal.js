import React from "react";
import ReactDOM from "react-dom";
import { Form } from "./Form";
import FocusTrap from "focus-trap-react";

export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit,
}) => {
  return ReactDOM.createPortal(
    <aside
      tag="aside"
      role="dialog"
      tabIndex="-1"
      aria-modal="true"
      className="modal-cover"
      onClick={onClickOutside}
      onKeyDown={onKeyDown}
    >
      <div className="modal-area career-section register" ref={modalRef}>
        <div className="twocol-row">
          <div className="col-75 bg-grey-color">
            <div className="about-us-right-img ">
              <div
                className="about-us-head animate__animated animate__fadeInUp"
                // data-animation="fadeInUp"
                // data-duration="200"
              >
                <h3>REGISTER</h3>
              </div>
              <div className="success-message"></div>

              <Form onSubmit={onSubmit} />
            </div>
          </div>
          <div className="col-25">
            <div
              className="career-img animate__animated animate__fadeInUp"
              // data-animation="fadeInRight"
              // data-duration="200"
            >
              <img src="/assets/images/register/register-img.png" alt="" />
            </div>
          </div>
        </div>
        <button
          ref={buttonRef}
          aria-label="Close Modal"
          aria-labelledby="close-modal"
          className="_modal-close"
          onClick={closeModal}
        >
          <span id="close-modal" className="_hide-visual">
            Close
          </span>
          <svg className="_modal-close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
      </div>
    </aside>,
    document.body
  );
};

export default Modal;
