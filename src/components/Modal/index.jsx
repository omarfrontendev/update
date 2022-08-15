import React from "react";

export default function Modal({ id, children, maxWidth }) {
  return (
    <>
      {/* <button className="btn" data-bs-toggle="modal" data-bs-target={`#${id}`}></button> */}
      <div className="modal fade" id={id} tabindex="-1" aria-hidden="true">
        <div
          class="modal-dialog modal-dialog-centered"
          style={{
            maxWidth: maxWidth || "924px",
            background: "transparent",
            border: "0",
            boxShadow: "none",
          }}
        >
          <div
            className="modal-content"
            style={{
              background: "transparent",
              border: "0",
              boxShadow: "none",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
