import React, { memo } from "react";
import { GiCancel } from "react-icons/gi";
import { MdModeEditOutline } from "react-icons/md";
import createStyledComponents from "../../Utils/createStyledComponent";

interface Props {
  children: JSX.Element;
  handleEdit: () => void;
  handledDelete: () => void;
}
function FormCards({ children, handleEdit, handledDelete }: Props) {
  return (
    <div className="bg-white flex p-2 rounded-md shadow-md border-2 min-h-[60px] relative">
      <div className="w-full">{children}</div>
      <div className="flex flex-col absolute  justify-between -right-3 -top-3 h-[130%]">
        <Icon className="bg-green-600" onClick={handleEdit}>
          <MdModeEditOutline />
        </Icon>
        <Icon className="bg-red-600" onClick={handledDelete}>
          <GiCancel />
        </Icon>
      </div>
    </div>
  );
}

const Icon = createStyledComponents(
  `rounded-full p-1 text-white flex justify-center content-center transform hover:scale-110`,
  "button"
);

export default memo(FormCards);
