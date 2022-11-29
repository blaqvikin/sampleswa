import React, { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ open, onClose }) => {
  const ref = useRef<HTMLBodyElement | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    ref.current = document.getElementsByTagName("body")[0];
    setMounted(true);
  }, []);
  return mounted && open
    ? createPortal(
        "",
        // @ts-ignore
        ref.current
      )
    : null;
};

export default Modal;
