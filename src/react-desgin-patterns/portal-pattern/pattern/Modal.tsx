import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, handleClose, children }: ModalProps) {
  const modalRoot = document.getElementById("root") as HTMLDivElement;
  const modalElement = document.createElement("div") as HTMLDivElement;

  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(modalElement);
    }
    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement, modalRoot]);

  if (isOpen === false) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "aqua",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        justifyContent: "center",
      }}
    >
      <div>{children}</div>
      <div>
        <button onClick={handleClose}>close modal</button>
      </div>
    </div>,
    modalElement
  );
}
