import { useEffect, useState } from "react";
import detectBrowser from "../Utils/detectbrowerser";
import Modal from "./Modal";

function BrowserAlert() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  useEffect(() => {
    const browser = detectBrowser();
    const isSupportedBrowser =
      browser === "Chrome" ||
      browser === "Edge ( chromium based)" ||
      browser === "Mozilla Firefox";
    setIsOpen(!isSupportedBrowser);
  }, []);

  return (
    ""
  );
}

export default BrowserAlert;
