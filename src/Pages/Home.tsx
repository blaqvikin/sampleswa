import React from "react";
import "./index.module.css";
import { FAQ, TourModal } from "../components";
import { faqItems, steps, templateData } from "../Utils";
import Templates from "../components/Templates";
import { useScrollToTop } from "../hooks";

export default function Home() {
  useScrollToTop();
  return (
    <div className="w-full">
      {/* <TourModal /> */}
      <main>
        {/* ==================Hero section starts here======================== */}
        <div className="h-screen max-h-[820px] w-full bg-green-500 flex flex-col justify-center lg:flex-row items-center p-20 px-10 sm:px-20">
          <div className="p-2 shadow-md w-[70%] max-h-96 lg:max-h-full rounded-md bg-white overflow-hidden ">
            <img
              src="/images/templates/capability_statement_3rdi_blue.jpg"
              width={1700 / 2}
              height={2200 / 2}
              className="w-full"
              alt="3rdi_logo"
            />
          </div>
          <div className="sm:px-10 px-0 z-10 bg-green-500 lg:text-left text-center">
            <h1 className="font-extrabold md:text-5xl text-2xl mb-4 text-white">
              Free Capability Statement Template Designs
            </h1>
          </div>
        </div>
        {/* ==================Hero section ends here======================== */}

        {/* ==================Template section starts here======================== */}
        <Templates />
        {/* ==================Template section ends here======================== */}

        {/* ==================Steps Section Starts here====================== */}
        <div className="p-5 md:p-20">
          <h1 className="heading">Steps</h1>
          <div className="flex flex-col justify-center items-center">
            {steps.map((item) => (
              <div
                key={item.description}
                className="flex items-center my-5 lg:w-5/12 w-full"
              >
                <img
                  src={item.image}
                  width={158}
                  height={120}
                  className="w-1/4 md:w-1/3 max-w-[158px]"
                  alt="3rdi_logo"
                />
                <p className="font-semibold w-full ml-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* ==================Steps Section ends here====================== */}

        {/* ====================FAQ starts here============================ */}
        <div className="p-5 md:p-20">
          <h1 className="heading">FAQ</h1>
          <div className="flex flex-col justify-center items-center">
            {faqItems.map((item, index) => (
              <FAQ {...item} key={index} />
            ))}
          </div>
        </div>
        {/* ====================FAQ ends here============================ */}
      </main>
    </div>
  );
}
