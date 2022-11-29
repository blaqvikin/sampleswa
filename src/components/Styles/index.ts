import createStyledComponents from "../../Utils/createStyledComponent";

export { default as htmlTemplateStyles } from "./HtmlTemplate.module.css";
export { default as reactCropCss } from "./reactCrop.module.css";

export const Button = createStyledComponents(
  `p-2 px-4 border-2 border-white rounded-md hover:border-green-300 transform active:bg-green-600 active:scale-95 font-semibold`,
  "button"
);
