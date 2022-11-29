import React, {
  forwardRef,
  InputHTMLAttributes,
  useRef,
  useState,
} from "react";
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";
import createStyledComponents from "../Utils/createStyledComponent";
interface Props
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  onChange: (value: string) => void;
  variant?: "input" | "textArea";
  regex?: RegExp;
  toolTipMessage?: string;
  isError?: boolean;
}
const CustomInput = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      placeholder,
      onChange,
      toolTipMessage,
      variant = "input",
      onBlur,
      onFocus,
      isError,
      ...props
    },
    ref
  ) => {
    const [isInputEmpty, setIsInputEmpty] = useState(!Boolean(props.value));
    const [isFocused, setIsFocused] = useState(false);

    const tooltipRef = useRef(null);

    return (
      <Tooltip
        placement="left"
        overlay={toolTipMessage}
        arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
        visible={Boolean(toolTipMessage && isFocused)}
        ref={tooltipRef}
      >
        <Container
          className={`${
            isFocused
              ? "border-green-300"
              : `${isError ? "border-red-600" : "border-gray-300"}`
          }`}
        >
          <Input
            ref={ref}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus && onFocus(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur && onBlur(e);
            }}
            onChange={({ target: { value } }) => {
              setIsInputEmpty(value === "");
              onChange(value);
            }}
            {...props}
          />
          <div
            className={`absolute z-10  w-full h-full top-0 flex ${
              isInputEmpty && !isFocused ? "items-center" : "items-start"
            }`}
          >
            <p
              className={`${
                isInputEmpty && !isFocused ? "pl-5" : "pl-0 -mt-3"
              } bg-white font-light text-gray-500 text-xs`}
            >
              {placeholder}
            </p>
          </div>
        </Container>
      </Tooltip>
    );
  }
);

const Container = createStyledComponents("relative rounded-md border-2 w-full");
const Input = createStyledComponents(
  "relative z-20 p-5 py-2 w-full border-white  focus:outline-none bg-transparent outline-none",
  "textarea"
);

export default React.memo(CustomInput);
