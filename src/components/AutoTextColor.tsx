import { FC, HTMLAttributes } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { getBrightness, getRGBAobject } from "../Utils";

const AutoTextColor: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...Props
}) => {
  const documentColor = useAppSelector((state) => state.formInfo.documentColor);
  const colorObject = getRGBAobject(documentColor);
  const textColor =
    getBrightness(colorObject) > 128 || colorObject.a < 0.5 ? "black" : "white";
  return (
    <div style={{ color: textColor }} {...Props}>
      {children}
    </div>
  );
};

export default AutoTextColor;
