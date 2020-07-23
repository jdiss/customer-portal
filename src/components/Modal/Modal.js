import React from "react";
import ReactDOM from "react-dom";
import { ModalOverlay, ModalWrapper, ModalContent } from "./Modal.base";

const Modal = ({ isShowing, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <ModalContent>
              <div>{children}</div>
            </ModalContent>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
