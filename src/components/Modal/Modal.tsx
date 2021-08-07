import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.scss";

export const Modal = (props: any) => {
  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const rootDiv = document.getElementById("root")!;

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
            <button onClick={props.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    rootDiv
  );
};
