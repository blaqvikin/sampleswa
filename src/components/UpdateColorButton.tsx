import { useUpdateDocumentColor } from "../hooks";

interface Props {
  color: string;
}
function UpdateColorButton({ color }: Props) {
  const [, setDocumentColor] = useUpdateDocumentColor();
  return (
    <button
      style={{ backgroundColor: color }}
      className="h-10 lg:h-14 w-10 lg:w-14 rounded-lg mr-2"
      onClick={() => setDocumentColor(color)}
    />
  );
}

export default UpdateColorButton;
