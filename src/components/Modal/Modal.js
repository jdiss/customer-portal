import React from "react";
import ReactDOM from "react-dom";
import { ModalOverlay, ModalWrapper, ModalContent } from "./Modal.base";

const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <ModalContent>
              <div className="header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div>{children}</div>
              <div></div>
            </ModalContent>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
