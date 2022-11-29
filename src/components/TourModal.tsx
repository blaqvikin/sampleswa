import React from "react";
import { createPortal } from "react-dom";

function TourModal() {
  return createPortal(
    <div className="fixed top-0 h-full bg-red-200 w-full z-50"></div>,
    document.getElementsByTagName("html")[0]
  );
}

export default TourModal;
