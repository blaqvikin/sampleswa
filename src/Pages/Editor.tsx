import { Suspense, useMemo, useRef, useState } from "react";
import {
  ColorPicker,
  Forms,
  PrintButton,
  Switch,
  UpdateColorButton,
} from "../components";
import { documentColor } from "../Utils";
import GetHtmlTemplate from "../components/GetHtmlTemplate";
import ReactToPrint from "react-to-print";
import TemplateWrapper from "../components/TemplateWrapper";
import Templates from "../components/Templates";
import { useParams } from "react-router-dom";
import { useScrollToTop } from "../hooks";
import BrowserAlert from "../components/BrowserAlert";
import WindowsSizeAlert from "../components/WindowsSizeAlert";
import createStyledComponents from "../Utils/createStyledComponent";

function Editor() {
  const [previewDocument, setPreviewDocument] = useState(false);
  const { id: templateId } = useParams<{ id: string }>();
  const templateRef = useRef<HTMLDivElement>(null);
  useScrollToTop();

  const DynamicComponent = useMemo(
    () => GetHtmlTemplate(templateId as string),
    [templateId]
  );

  const toggleDocumentPreview = () => setPreviewDocument(!previewDocument);

  return (
    <>
  
      {templateId ? (
        <div className="min-h-screen flex bg-white">
          <Aside>
            <Forms />
          </Aside>
          <Main className={` ${previewDocument ? "left-0" : "left-full"} `}>
            <div className="flex flex-col lg:flex-row justify-between mt-20">
              <div>
                <h1 className="font-semibold text-xl">Edit Template Colors</h1>
                <div className="flex templateColors">
                  {documentColor.map((item) => (
                    <UpdateColorButton color={item} key={item} />
                  ))}
                </div>
                <div>
                  <ColorPicker />
                </div>
              </div>
              <div className="flex mt-5">
                <p className="font-semibold text-xl mr-4">View Template</p>
                <Switch />
              </div>
            </div>
            <div className="my-3 overflow-auto ">
              <div
                className="max-w-4xl ml-auto mr-auto"
                style={{ minWidth: "700px" }}
              >
                <div
                  ref={templateRef}
                  className="documents"
                  style={{ width: "8.5in" }}
                >
                  <TemplateWrapper>
                    {(state) => (
                      <Suspense fallback={<div>Loading...</div>}>
                        <DynamicComponent state={state} />
                      </Suspense>
                    )}
                  </TemplateWrapper>
                </div>
                <ReactToPrint
                  trigger={() => (
                    <div>
                      <PrintButton />
                    </div>
                  )}
                  content={() => templateRef.current}
                />
              </div>
            </div>
          </Main>
          <ExportButton onClick={toggleDocumentPreview}>
            {previewDocument ? <p>Close Document</p> : <p>Preview Document</p>}
          </ExportButton>
        </div>
      ) : (
        <section>
          <div className="h-56 bg-green-500 flex justify-center items-center">
            <h1 className="heading mt-20">
              Free Capability Statement Template Designs
            </h1>
          </div>
          <Templates title="" />
        </section>
      )}
    </>
  );
}

const Main = createStyledComponents(
  "lg:left-0 w-screen lg:w-auto bg-gray-100 z-30 lg:relative fixed pb-20 px-5 lg:px-10 border-l-2 flex-1 h-screen overflow-y-auto overflow-x-hidden",
  "main"
);

const Aside = createStyledComponents(
  "lg:h-screen lg:min-w-[400px] lg:max-w-sm h-auto w-screen lg:w-auto overflow-y-auto overflow-x-hidden",
  "aside"
);

const ExportButton = createStyledComponents(
  "fixed lg:hidden bottom-4 right-5 z-30 text-white bg-green-400 p-2 rounded-md font-medium shadow-xl",
  "button"
);
export default Editor;
