import { useFormik } from "formik";
import { useCallback } from "react";
import { BusinessDetails } from "../../@types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateBusinessDetails } from "../../redux/features/FormInfo";
import CustomInput from "../CustomInput";
import CustomTextArea from "../CustomTextArea";
import UploadLogoButton from "../UploadLogoButton";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  about: Yup.string().min(10).required(),
  address: Yup.string().required(),
  email: Yup.string().email().required(),
  entityType: Yup.string().required(),
  name: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  revenue: Yup.string().required(),
  website: Yup.string().required(),
  logo: Yup.string().required(),
});

function BusinessForm() {
  const dispatch = useAppDispatch();
  const initialValues = useAppSelector(
    (state) => state.formInfo["Business Details"]
  );
  const { errors, setFieldValue } = useFormik<BusinessDetails>({
    initialValues,
    validateOnChange: true,
    validationSchema,
    onSubmit(e) {
      dispatch(updateBusinessDetails(e));
    },
  });
  const getProps = useCallback(
    (key: keyof BusinessDetails) => ({
      name: key,
      isError: Boolean(errors[key]),
      value: initialValues[key],
      onChange: (e: string) => {
        setFieldValue(key, e);
        dispatch(updateBusinessDetails({ ...initialValues, [key]: e }));
      },
    }),
    [dispatch, errors, initialValues, setFieldValue]
  );

  const handleImage = (e: string | undefined) => {
    setFieldValue("logo", e);
    dispatch(updateBusinessDetails({ ...initialValues, logo: e }));
  };
  return (
    <form className="flex flex-col gap-3">
      <CustomInput placeholder="Name" toolTipMessage="" {...getProps("name")} />
      <CustomInput
        placeholder="Email"
        toolTipMessage=""
        {...getProps("email")}
      />
      <CustomInput
        placeholder="Phone Number"
        toolTipMessage=""
        {...getProps("phoneNumber")}
      />
      <CustomInput
        placeholder="Website"
        toolTipMessage=""
        {...getProps("website")}
      />
      <CustomTextArea
        placeholder="Address"
        toolTipMessage=""
        {...getProps("address")}
      />
      <CustomInput
        placeholder="Entity type"
        toolTipMessage=""
        {...getProps("entityType")}
      />
      <CustomInput
        placeholder="Revenue"
        toolTipMessage=""
        {...getProps("revenue")}
      />
      <CustomTextArea
        placeholder="About"
        toolTipMessage=""
        {...getProps("about")}
      />
      <div className="mt-4">
        
      </div>
    </form>
  );
}

export default BusinessForm;
