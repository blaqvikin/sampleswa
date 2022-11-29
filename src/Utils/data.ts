import { Crop } from "react-image-crop";
import { CapabilityForm, FAQtype, PdfTemplateType } from "../@types";
// import logoD from "../../public/images/templates/documentLogo.png";

export const templateData: PdfTemplateType[] = [
  {
    image: "/images/templates/capability_statement_3rdi_green.jpg",
    id: "1",
  },
  {
    image: "/images/templates/capability_statement_3rdi.jpg",
    id: "2",
  },
  {
    image: "/images/templates/capability_statement_3rdi_blue.jpg",
    id: "3",
  },
  {
    image: "/images/templates/capability_statement_3rdi_line.jpg",
    id: "4",
  },
];

export const steps = [
  {
    image: "/images/icons/step_1.png",
    description: "Explore Capability Statement template designs",
  },
  {
    image: "/images/icons/step_2.png",
    description: "Fill out templates form with your business information",
  },
  {
    image: "/images/icons/step_3.png",
    description: "Choose how you wish to save or send template",
  },
];

export const faqItems: FAQtype[] = [
  {
    question: "What is a capability statement and do you really need it?",
    answer: `It's
      a short summary (typically 1-page long) that outlines your
      business competencies (akin to a resume) and yes, you need it.
      Ideally it provides your capabilities and is also an opportunity
      to tell your stakeholders your value proposition. The process of
      creating our own statement was both expensive and time consuming.
      True to our mission, we had an idea! Why not create a tool to save
      you from having to go through the same experience. We created a
      web application that enables you to use these templates to print
      your own capability statement for free! Add your company’s logo,
      fill out a few form fields and certifications and you're done.
      Save your template as either a PDF, Word, Excel, Powerpoint, send
      to your email, or print.`,
  },
  {
    question: "What web browsers support the application?",
    answer: "Chrome, Firefox, Edge (Chromium based) are supported.",
  },
  {
    question: "What format will the capability statement be sent in?",
    answer: "You can export your template as a PDF",
  },
  {
    question: "Is there a time limit to create the statement ?",
    answer: "NO",
  },
  {
    question: "Do I need an account to generate a capability statement?",
    answer: "NO",
  },
];

export const documentColor = [
  "rgba(196, 196, 196, 1)",
  "rgba(8, 49, 106, 1)",
  "rgb(27, 104, 52)",
  "rgba(0, 0, 0, 1)",
];

export const defaultState: CapabilityForm = {
  "Business Details": {
    phoneNumber: "+1 (347) 670 - 7233",
    address: "3418 Northern Blvd, Ste 304 Long Island City, NY 11101",
    email: "business@3rdi.tech",
    name: "Roy Sirengo",
    website: "3rdi.tech",
    about:
      "3RDI Technologies (third eye) is a minority-owned, consulting firm serving customers in the Northeast. We bring over two decades of experience drawn from various business sectors. As a technology company, we build tools and services that help disadvantaged businesses (m/w/ vbe) succeed in government contracting. We also provide consulting services at the intersection of construction, technology and sustainability.",
    entityType: "LLC (inc 2015)",
    revenue: "<$1MM",
    logo: "/images/icons/3rdi_logo.png",
  },
  codesAndCertification: [
    {
      name: "Computer Training",
      sic: "8243",
      naic: "611420",
      id: "0",
    },
    {
      name: "Construction Estimation Services",
      sic: "8243",
      naic: "611420",
      id: "01",
    },
    {
      name: "Environmental Consulting Services",
      sic: "8243",
      naic: "611420",
      id: "02",
    },
    {
      name: "Environmental Engineering Services",
      sic: "8243",
      naic: "611420",
      id: "03",
    },
    {
      name: "Software Programming Services",
      sic: "8243",
      naic: "611420",
      id: "04",
    },
  ],
  mbeCertificate: [
    { id: "0", name: "PANYNJ SBE", year: "09/01/2023" },
    { id: "1", name: "PANYNJ MBE", year: "09/01/2023" },
    { id: "s", name: "MWCERT2019-3972", year: "09/01/2023" },
  ],
  companyCodes: {
    DUNS: "010888677",
    CAGE: "91SX9",
    ARIBIA: "JCVYQ4BFD9G3",
    ENI: "JCVYQ4BFD9G3",
    SAM: "JCVYQ4BFD9G3",
  },
  coreCompetencies: [
    "Construction Software",
    "Job Order Contracting",

    "iDiQ (Indefinite Delivery,Indefinite Quantity) Contracting",
    "Data Visualization, KPI & Dashboard Development",
    "Environmental Consulting",
    "Project Management",
    "M/WBE Engagement",
    "Stakeholder Engagement",
    "Training & Skill Building",
  ],
  differentiators: [
    "Experience with NYC agency stakeholders and a deep understanding of their internal processes.",
    "Cross platform expertise including integration between various construction software programs",
    "Expertise with operationalizing business imperatives",
    "Data driven, customer-first approach grounded in equity and sustainability.",
  ],
  "client list": [
    "Department of Health and Mental Hygiene (DOMNH)",
    "Department of Social Services (DSS)",
    "Department of Investigation (DOI)",
    "Department of Cultural Affairs (DCLA)",
  ],
  documentColor: "rgb(27, 104, 52)",
};

export function getCroppedImg(
  image: HTMLImageElement,
  crop: Crop,
  fileName: String
): Promise<string> {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  canvas.className = "bg-red-500";
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  // New lines to be added
  const pixelRatio = window.devicePixelRatio;
  canvas.width = crop.width * pixelRatio;
  canvas.height = crop.height * pixelRatio;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  // As Base64 string
  // const base64Image = canvas.toDataURL("image/jpeg");
  // return base64Image;

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(window.URL.createObjectURL(blob));
        }
      },
      "image/png",
      1
    );
  });
}

export const getBrightness = ({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}) => (r * 299 + g * 587 + b * 114) / 1000;
export const getRGBAobject = (color: string) => {
  const [rgbaValue] = /\(.*\)/g.exec(color) as RegExpExecArray;
  const colorArray = rgbaValue
    .replace(/\(|\)/g, "")
    .split(", ")
    .map((item) => parseInt(item));
  const colorObject = {
    r: colorArray[0],
    g: colorArray[1],
    b: colorArray[2],
    a: 1,
  };
  return colorObject;
};

export const getLighterColorShade = (color: string) => {
  const colorObject = getRGBAobject(color);
  colorObject.a = 0.7;
  return `rgba(${Object.values(colorObject).join(", ")})`;
};
