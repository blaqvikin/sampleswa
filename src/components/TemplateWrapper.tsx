import React from "react";
import { CapabilityForm } from "../@types";
import { useUpdateFormUIstate } from "../hooks";
import { useAppSelector } from "../hooks/reduxHooks";
import { defaultState } from "../Utils";

interface Props {
  children: (state: CapabilityForm) => JSX.Element;
}

const TemplateWrapper = React.forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    const globalFormState = useAppSelector((state) => state.formInfo);
    const [uiState] = useUpdateFormUIstate();
    const formData = uiState.showTemplate ? defaultState : globalFormState;
    return <div ref={ref}> {children(formData)}</div>;
  }
);

export default TemplateWrapper;
