export interface FAQtype {
  question: string;
  answer: string;
}

export interface PdfTemplateType {
  image: string;
  id: string;
}

export type CompanyCodesKeys = "DUNS" | "CAGE" | "ARIBIA" | "ENI" | "SAM";
export interface BusinessDetails {
  name: string;
  email: string;
  phoneNumber: string;
  website: string;
  address: string;
  entityType: string;
  revenue: string;
  about: string;
  logo?: string;
}

export interface codeAndCertification {
  name: string;
  sic: string;
  naic: string;
}

export interface ArrayData<T> {
  id: string;
  info: T;
}
export type CodesAndCertification = {
  name: string;
  sic: string;
  naic: string;
  id: string;
};

export type Certificate = { name: string; year: string; id: string };
export interface CapabilityForm {
  "Business Details": BusinessDetails;
  differentiators: string[];
  coreCompetencies: string[];
  codesAndCertification: CodesAndCertification[];
  mbeCertificate: Certificate[];
  companyCodes: {
    [key in CompanyCodesKeys]: string;
  };
  "client list": string[];
  documentColor: string;
}
export type FormWithObjectData = Pick<
  CapabilityForm,
  "Business Details" | "companyCodes"
>;
export type StateWithArrayStructure = Pick<
  CapabilityForm,
  | "differentiators"
  | "coreCompetencies"
  | "client list"
  | "codesAndCertification"
  | "mbeCertificate"
>;

export type p = Extract<CapabilityForm, string[]>;

export type StateWithObjectStructure = Pick<
  CapabilityForm,
  "Business Details" | "companyCodes"
>;
export type StateWithString = Pick<CapabilityForm, "documentColor">;
export type FormKeys = keyof CapabilityForm;

type PropertiesWithValue<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

export type StateWithKeyValuePair = PropertiesWithValue<CapabilityForm, any[]>;
