import React, { FC } from "react";

interface Props {
  variant: "Add" | "Update";
  onAdd: () => void;
  onUpdate: () => void;
}
const FormButton: FC<Props> = ({ onAdd, onUpdate, variant }) => {
  return (
    <>
      {variant === "Add" ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            onAdd();
          }}
          className="p-2 px-4 border-2 border-white rounded-md hover:border-green-300"
        >
          <p>+ Add</p>
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            onUpdate();
          }}
          className={`p-2 rounded-md text-white px-4 bg-green-500`}
        >
          <p>Update</p>
        </button>
      )}
    </>
  );
};

export default FormButton;
