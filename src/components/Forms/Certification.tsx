import { useEffect, useState } from "react";
import { CustomInput } from "..";
import { Certificate, FormKeys } from "../../@types";
import { Button } from "../Styles";
import FormCards from "./InputCard";

//TODO rename to codes and certifications

interface Props {
  onChange: (
    key: Extract<FormKeys, "mbeCertificate">,
    value: Certificate[]
  ) => void;
}
const init = {
  id: "",
  naic: "",
  name: "",
  year: "",
};
function CertificationForm({ onChange }: Props) {
  const [inputValue, setInputValue] = useState<Certificate>(init);

  const [values, setValues] = useState<Certificate[]>([]);

  const addValue = () => {
    if (inputValue?.year && inputValue.name) {
      const id = `${inputValue.year}${inputValue.name}`;
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
    onChange("mbeCertificate", values);
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
                  <p className="">
                    <b className="text-sm">year</b>: {item.year}
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
          <p>Year:</p>
          <input
            className="flex-1"
            value={inputValue.year}
            onChange={(e) =>
              setInputValue({ ...inputValue, year: e.currentTarget.value })
            }
            type="date"
          />
        </div>
      </div>
      <div className="ml-auto">
        <Button onClick={addValue}>Add</Button>
      </div>
    </div>
  );
}

export default CertificationForm;
