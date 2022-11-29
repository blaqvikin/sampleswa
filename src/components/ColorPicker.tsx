import React, { useState } from "react";
import { RgbStringColorPicker } from "react-colorful";
import { useUpdateDocumentColor } from "../hooks";

const ColorPicker = () => {
  const [documentColor, setDocumentColor] = useUpdateDocumentColor();
  const [colorPickerisVisible, setColorPickerisVisible] = useState(false);
  const toggleColorPickerVisibility = () =>
    setColorPickerisVisible(!colorPickerisVisible);
  return (
    <>
      {colorPickerisVisible && (
        <RgbStringColorPicker
          color={documentColor}
          onChange={(e) => {
            setDocumentColor(e);
            console.log(e);
          }}
        />
      )}
      <button
        onClick={toggleColorPickerVisibility}
        className="p-2 border-2 hover:text-white hover:bg-green-600 border-green-700 rounded-md my-3"
      >
        {colorPickerisVisible ? "Close picker" : "Pick a custom color"}
      </button>
    </>
  );
};

export default React.memo(ColorPicker);
