import { lazy } from "react";
function GetHtmlTemplate(templateId: string) {
  const Component = lazy(() => {
    switch (templateId) {
      case "1":
        return import("./AllTemplates/One");

      case "2":
        return import("./AllTemplates/Two");

      case "3":
        return import("./AllTemplates/Three");

      case "4":
        return import("./AllTemplates/Four");

      default:
        return import("./AllTemplates/Two");
    }
  });
  return Component;
}

export default GetHtmlTemplate;
