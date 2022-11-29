import React from "react";
import { templateData } from "../Utils";
import { Link } from "react-router-dom";
import createStyledComponents from "../Utils/createStyledComponent";

interface Props {
  title?: string;
}

function Templates({ title = "Capability Statement Examples" }: Props) {
  return (
    <div className="sm:p-10 p-5">
      <h1 className="heading sm:my-10 my-5">{title}</h1>
      <ul className="flex content-center flex-wrap justify-center items-center">
        {templateData.map(({ id, image }, index) => {
          return (
            <Link to={{ pathname: `/templates/${id}` }}>
              <Card key={id}>
                <img
                  src={image}
                  className="rounded-md shadow-inner w-full"
                  alt="3rdi_logo"
                />
                <TemplateButton>
                  <p className="text-center bg-green-700 p-3 px-5 shadow-md rounded-full text-white font-semibold">
                    Use this template
                  </p>
                </TemplateButton>
              </Card>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

const Card = createStyledComponents(
  `relative aspect-[17/22] w-[300px] group m-3 hover:m-5 rounded-lg p-3 overflow-hidden transform hover:shadow-2xl shadow-xl border-2 hover:border-green-700 hover:scale-105 flex-grow-0`,
  "li"
);
const TemplateButton = createStyledComponents(
  `absolute w-full bottom-0 -mb-24 group-hover:mb-20 left-0 flex justify-center items-center bg-red`,
  "button"
);
export default Templates;
