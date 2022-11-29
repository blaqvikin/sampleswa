import { FAQtype } from "../@types";

function FAQ({ answer, question }: FAQtype) {
  return (
    <details className="m-5 lg:p-10 p-5 z-10 flex shadow-md drop-shadow-md bg-gray-200 lg:w-3/4  w-full rounded-md">
      <summary className="flex-1 cursor-pointer">
        <p className="inline font-semibold text-xl">{question}</p>
      </summary>
      <p className="text-base mt-5">{answer}</p>
    </details>
  );
}

export default FAQ;
