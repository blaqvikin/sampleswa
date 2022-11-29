import React from "react";
import { useCheckDocumentProgress } from "../hooks";

function PrintButton() {
  const checkDocument = useCheckDocumentProgress();
  return (
    <button
      onClick={(e) => {
        // e.stopPropagation();
        console.log(checkDocument("Business Details"));
      }}
      className="my-2 fixed z-40 bottom-14 lg:bottom-4 right-4 bg-green-600 font-medium text-white p-3 rounded-md printButton"
    >
      <p>Export Document</p>
    </button>
  );
}

export default PrintButton;
