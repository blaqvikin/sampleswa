import React from "react";
import { useScrollToTop } from "../hooks";

function About() {
  useScrollToTop();
  return (
    <div className="md:p-40 md:px-20 px-10 py-40  min-h-full">
      <h1 className="heading mb-10">About</h1>
      <p>
        A capability statement is a short summary (typically 1-page long) that
        outlines your business competencies (akin to a resume) and yes, you need
        it. Ideally it provides your capabilities and is also an opportunity to
        tell your stakeholders your value proposition. The process of creating
        our own statement was both expensive and time consuming. True to our
        mission, we had an idea! Why not create a tool to save you from having
        to go through the same experience. We created a web application that
        enables you to use these templates to print your own capability
        statement for free! Add your company’s logo, fill out a few form fields
        and certifications and you're done. Save your template as either a PDF,
        Word, Excel, Powerpoint, send to your email, or print.
      </p>
    </div>
  );
}

export default About;
