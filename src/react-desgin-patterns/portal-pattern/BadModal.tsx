import React from "react";

interface BadModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
export default function BadModal({
  isOpen,
  handleClose,
  children,
}: BadModalProps) {
  if (isOpen === false) return null;
  return (
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
    </div>
  );
}
