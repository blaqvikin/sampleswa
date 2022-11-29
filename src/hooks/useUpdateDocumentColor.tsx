import { useAppDispatch, useAppSelector } from ".";
import { updateStateWithString } from "../redux/features/FormInfo";

function useUpdateDocumentColor() {
  const documentColor = useAppSelector((state) => state.formInfo.documentColor);
  const dispatch = useAppDispatch();
  const setDocumentColor = (e: string) =>
    dispatch(updateStateWithString({ name: "documentColor", value: e }));
  return [documentColor, setDocumentColor] as const;
}

export default useUpdateDocumentColor;
