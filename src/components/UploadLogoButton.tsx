import React, { useRef, useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import ReactDom from "react-dom";
import { getCroppedImg } from "../Utils";
import Tooltip from "rc-tooltip";

interface Props {
  onChange: (e: string | undefined) => void;
}

function UploadLogoButton({ onChange }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>("");
  const [croppedImage, setCroppedImage] = useState<string>();
  const imageRef = useRef<HTMLImageElement>();
  const tooltipRef = useRef(null);
  const [crop, setcrop] = useState<Partial<Crop>>({
  /*  aspect: 1 / 1,*/
    unit: "%",
    width: 50,
  });

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {  
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        //@ts-ignore
        setSelectedImage(reader.result);
        console.log(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleLogoUpload = async (action: "upload" | "reset") => {
    switch (action) {
      case "upload":
        {
          //@ts-ignore
          const blob = await getCroppedImg(imageRef.current, crop, "dddd");
          setCroppedImage(blob);
          onChange(blob);
          setSelectedImage(null);
        }
        break;

      case "reset":
        setCroppedImage("");
        onChange(undefined);
        break;

      default:
        break;
    }
  };

  // If you setState the crop in here you should return false.
  const onImageLoaded = (image: HTMLImageElement) => {
    imageRef.current = image;
  };

  const onCropChange = (crop: Crop, percentageCrop: Crop) => {
    setcrop(crop);
  };

  return (
     ""
  );
}

export default UploadLogoButton;
