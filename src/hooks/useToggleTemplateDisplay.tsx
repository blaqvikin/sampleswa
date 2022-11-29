import { useAppDispatch, useAppSelector } from ".";
import { updateFormUi } from "../redux/features/FormUi";

function useToggleTemplateDisplay() {
  const uiState = useAppSelector((state) => state.formUI.value);
  const { showTemplate: isTemplateShowing } = uiState;
  const dispatch = useAppDispatch();
  const onToggle = () => {
    dispatch(updateFormUi({ ...uiState, showTemplate: !isTemplateShowing }));
  };

  return [isTemplateShowing, onToggle] as const;
}

export default useToggleTemplateDisplay;
