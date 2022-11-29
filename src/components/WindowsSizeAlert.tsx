import { useEffect, useState } from "react";
import Modal from "./Modal";

function WindowsSizeAlert() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  useEffect(() => {
    const windowsSize = window.innerWidth;
    console.log(windowsSize);
    setIsOpen(windowsSize < 800);
  }, []);

  return (
    ""
  );
}

export default WindowsSizeAlert;
