import React from "react";
import "./Modal.css";

export default function Modal({ open, onClose, post }) {
  if (!open) return null;
  return (
    <div className="ModalOverlay" onClick={onClose}>
      <div className="ModalImage">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
