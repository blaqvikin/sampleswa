import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { alert, removeAlert } from "../redux/features/Alert";
function Alert() {
  const ref = useRef<HTMLBodyElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const alerts = useAppSelector((state) => state.Alert.data);
  useEffect(() => {
    ref.current = document.getElementsByTagName("body")[0];
    setMounted(true);
  }, []);
  return mounted
    ? createPortal(
        <div className="fixed right-5 top-20 w-[300px] z-50">
          {alerts.map(({ id, message }) => (
            <Content key={id} {...{ id, message }} />
          ))}
        </div>,
        // @ts-ignore
        ref.current
      )
    : null;
}

const Content = ({ id, message }: alert) => {
  const dispatch = useAppDispatch();
  const unmount = () => dispatch(removeAlert({ id }));
  useEffect(() => {
    const _ = setTimeout(() => {
      unmount();
    }, 5000);
    return () => clearTimeout(_);
  }, []);

  return (
    <div
      onClick={() => unmount()}
      className="flex justify-between items-start relative rounded-sm p-2  bg-red-300 mb-3"
    >
      <div>{message}</div>
      <button
        onClick={() => removeAlert({ id })}
        className="bg-white p-1 rounded-sm shadow-sm"
      >
        X
      </button>
    </div>
  );
};
export default Alert;
