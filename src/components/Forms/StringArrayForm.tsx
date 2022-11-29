import React, { useEffect, useRef, useState } from "react";
import { StateWithArrayStructure } from "../../@types";
import createStyledComponents from "../../Utils/createStyledComponent";
import CustomTextArea from "../CustomTextArea";
import FormCards from "./InputCard";

interface Props {
  name: keyof StateWithArrayStructure;
  onChange: (key: keyof StateWithArrayStructure, values: string[]) => void;
}

function StringArrayForm({ onChange, name }: Props) {
  const [values, setValues] = useState<string[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const addValue = () => {
    if (inputRef.current && inputRef.current?.value.trim()) {
      const newValues = [...values, inputRef.current?.value];
      setValues(newValues);
      inputRef.current.value = "";
    }
  };
  const deleteValues = (e: string) => {
    setValues(values.filter((i) => e !== i));
  };
  const editValue = (e: string) => {
    deleteValues(e);
    if (inputRef.current) {
      inputRef.current.value = e;
    }
  };

  useEffect(() => {
    console.log(1223);

    onChange(name, values);
  }, [name, onChange, values]);
  return (
    <FlexItem className="gap-5">
      <FlexItem className="gap-6">
        {values.map((i) => (
          <FormCards
            handleEdit={() => editValue(i)}
            handledDelete={() => deleteValues(i)}
            key={i}
          >
            <p className="break-words w-full"> {i}</p>
          </FormCards>
        ))}
      </FlexItem>
      <CustomTextArea
        ref={inputRef}
        className="min-h-[100px]"
        onChange={() => {}}
      />
      <div className="flex justify-end">
        <Button onClick={addValue}>+ Add</Button>
      </div>
    </FlexItem>
  );
}

const Button = createStyledComponents(
  `p-2 px-4 border-2 border-white rounded-md hover:border-green-300 transform active:bg-green-600 active:scale-95 font-semibold`,
  "button"
);

const FlexItem = createStyledComponents("flex flex-col");

export default StringArrayForm;
