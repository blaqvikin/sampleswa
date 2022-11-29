import { useFormik } from "formik";
import { useCallback } from "react";
import { CapabilityForm } from "../../@types";
import CustomInput from "../CustomInput";
import * as Yup from "yup";
import { stringValidation } from "../../Utils/validationSchema";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateCompanyCodes } from "../../redux/features/FormInfo";
const validationSchema = Yup.object().shape({
  ARIBIA: stringValidation,
  CAGE: stringValidation,
  DUNS: stringValidation,
  ENI: stringValidation,
  SAM: stringValidation,
});

function CompanyCodes() {
  const dispatch = useAppDispatch();
  const initialValues = useAppSelector(
    (state) => state.formInfo["companyCodes"]
  );
  const { errors, setFieldValue } = useFormik<CapabilityForm["companyCodes"]>({
    initialValues,
    validateOnChange: true,
    validationSchema,
    onSubmit(e) {
      dispatch(updateCompanyCodes(e));
    },
  });
  const getProps = useCallback(
    (key: keyof CapabilityForm["companyCodes"]) => ({
      name: key,
      isError: Boolean(errors[key]),
      value: initialValues[key],
      onChange: (e: string) => {
        setFieldValue(key, e);
        dispatch(updateCompanyCodes({ ...initialValues, [key]: e }));
      },
    }),
    [dispatch, errors, initialValues, setFieldValue]
  );
  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        placeholder="ARIBIA"
        toolTipMessage=""
        {...getProps("ARIBIA")}
      />
      <CustomInput placeholder="DUNS" toolTipMessage="" {...getProps("DUNS")} />
      <CustomInput placeholder="CAGE" toolTipMessage="" {...getProps("CAGE")} />
      <CustomInput placeholder="ENI" toolTipMessage="" {...getProps("ENI")} />
      <CustomInput placeholder="SAM" toolTipMessage="" {...getProps("SAM")} />
    </div>
  );
}

export default CompanyCodes;
