import React from "react";
import { useToggleTemplateDisplay } from "../hooks";

function Switch() {
  const [displayTemplate, setDisplayTemplate] = useToggleTemplateDisplay();
  return (
    <>
      <button
        onClick={setDisplayTemplate}
        className={` ${
          displayTemplate ? "bg-green-700" : "bg-white"
        } flex-shrink-0 flex-grow-0 h-7  rounded-full w-14 shadow-md`}
      >
        <div
          className={`rounded-full ${
            displayTemplate ? "ml-10 bg-white" : "ml-0 bg-green-700"
          } w-5 h-5 shadow-lg`}
        />
      </button>
    </>
  );
}

export default React.memo(Switch);
