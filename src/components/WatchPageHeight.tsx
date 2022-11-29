import { HTMLAttributes, useEffect, useRef } from "react";
import { useAppDispatch } from "../hooks";
import { addAlert } from "../redux/features/Alert";

interface Props
  extends Exclude<HTMLAttributes<HTMLDivElement>, "ref" | "style"> {}

const WatchPageHeight = ({ style, ...props }: Props) => {
  const dispatch = useAppDispatch();

  const containerRef = useRef<HTMLDivElement>(null);
  const isPageTooLong = containerRef.current?.clientHeight
    ? containerRef.current?.clientHeight > 1170
    : false;
  useEffect(() => {
    if (isPageTooLong) {
      dispatch(
        addAlert({
          id: 22,
          message:
            "Document might be too long. Click on the export button to preview",
        })
      );
    }
  });
  return (
    <div
      ref={containerRef}
      style={{ ...style, minHeight: "11in" }}
      {...props}
    />
  );
};

export default WatchPageHeight;
