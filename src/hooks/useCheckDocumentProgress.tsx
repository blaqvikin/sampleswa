import { useAppSelector } from ".";
import { CapabilityForm } from "../@types";

function useCheckDocumentProgress() {
  const { formInfo } = useAppSelector((state) => state);
  const runCheck = (sate: keyof CapabilityForm) => {
    switch (sate) {
      case "Business Details":
        const allValues = Object.values(formInfo["Business Details"]);
        return allValues.every((v) => v !== "");

      case "codesAndCertification":
        return formInfo["codesAndCertification"].length > 1;

      default:
        break;
    }
  };

  return runCheck;
}

export default useCheckDocumentProgress;
