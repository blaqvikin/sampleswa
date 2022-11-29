import { useEffect, useState } from "react";
import { CustomInput } from "..";
import { FormKeys } from "../../@types";
import { Button } from "../Styles";
import FormCards from "./InputCard";

//TODO rename to codes and certifications
type Value = { name: string; sic: string; naic: string; id: string };

interface Props {
  onChange: (
    key: Extract<FormKeys, "codesAndCertification">,
    value: Value[]
  ) => void;
}
const init = {
  id: "",
  naic: "",
  name: "",
  sic: "",
};
function CodesAndCertificationForm({ onChange }: Props) {
  const [inputValue, setInputValue] = useState<Value>(init);

  const [values, setValues] = useState<Value[]>([]);

  const addValue = () => {
    if (inputValue?.sic && inputValue.naic && inputValue.name) {
      const id = `${inputValue.sic}${inputValue.naic}${inputValue.name}`;
      const newValue = [
        ...values,
        {
          ...inputValue,
          id,
        },
      ];
      setValues(newValue);
      setInputValue(init);
    }
  };

  const deleteValue = (id: string) => {
    setValues(values.filter((item) => item.id !== id));
  };
  const editValue = (id: string) => {
    const data = values.find((i) => i.id === id);
    if (data) {
      setInputValue(data);
    }
    deleteValue(id);
  };

  useEffect(() => {
    onChange("codesAndCertification", values);
  }, [onChange, values]);

  return (
    <div className="flex flex-col gap-5">
      <div>
        {values.map((item) => {
          return (
            <FormCards
              handleEdit={() => editValue(item.id)}
              handledDelete={() => deleteValue(item.id)}
            >
              <div key={item.id}>
                <p className="font-medium">{item.name}</p>
                <div className="flex">
                  <p className="mr-2">
                    <b>NAIC</b>: {item.naic}
                  </p>
                  <p className="">
                    <b className="text-sm">SIC</b>: {item.sic}
                  </p>
                </div>
              </div>
            </FormCards>
          );
        })}
      </div>

      <div className="w-full flex flex-col gap-5">
        <CustomInput
          value={inputValue?.name}
          variant="input"
          onChange={(e) => setInputValue({ ...inputValue, name: e })}
          placeholder="Name"
          maxLength={40}
        />
        <div className="flex gap-5">
          <CustomInput
            value={inputValue.naic}
            variant="input"
            onChange={(e) => setInputValue({ ...inputValue, naic: e })}
            placeholder="NAIC"
            type={"number"}
            maxLength={6}
            regex={/^[0-9]{6}$/}
          />
          <CustomInput
            value={inputValue.sic}
            variant="input"
            onChange={(e) => setInputValue({ ...inputValue, sic: e })}
            placeholder="SIC"
            type={"number"}
            maxLength={4}
            regex={/^[0-9]{4}$/}
          />
        </div>
      </div>
      <div className="ml-auto">
        <Button onClick={addValue}>Add</Button>
      </div>
    </div>
  );
}

export default CodesAndCertificationForm;
