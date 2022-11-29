import { useAppDispatch, useAppSelector } from ".";
import {
  resetFormui,
  uiStateType,
  updateFormUi,
} from "../redux/features/FormUi";

/**
 * This
 */
function useUpdateFormUIstate() {
  const uiState = useAppSelector((state) => state.formUI.value);
  const dispatch = useAppDispatch();
  const setState = (e: uiStateType) => dispatch(updateFormUi(e));
  const resetState = () => dispatch(resetFormui({}));

  return [uiState, setState, resetState] as const;
}

export default useUpdateFormUIstate;
