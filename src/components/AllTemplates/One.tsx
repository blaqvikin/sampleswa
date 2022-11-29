import React, { FC, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsPinMapFill } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { htmlTemplateStyles as styles } from "../Styles";
import { CapabilityForm, CompanyCodesKeys } from "../../@types";
import AutoTextColor from "../AutoTextColor";
import { useUpdateFormUIstate } from "../../hooks";
import { getLighterColorShade } from "../../Utils";
import WatchPageHeight from "../WatchPageHeight";
import { BusinessDetails as BS, ArrayData } from "../../@types";
import { List } from "./sections/List";
import CodesAndCertifications from "./sections/CodesAndCertifications";
import MBECertificate from "./sections/MBECertificate";

interface Props {
  state: CapabilityForm;
}

const TemplateOneWithRef: FC<Props> = ({ state: f }) => {
  const [uiState, setUiState] = useUpdateFormUIstate();
  const lighterDocumentColor = getLighterColorShade(f.documentColor);

  const { "Business Details": business } = uiState;
  useEffect(() => {
    setUiState({
      ...uiState,
      showTemplate: false,
      "core competencies": false,
      "Business Details": {
        ...business,
        "Entity type": false,
        Revenue: false,
      },
    });
  }, []);
  return (
    <WatchPageHeight
      className={`flex flex-col h-full text-sm overflow-hidden ${styles.pageN}`}
      // style={{ height: 1000,}}
    >
      {/* ============Template Heading=================== */}
      <Heading color={f.documentColor} logo={f["Business Details"].logo} />
      <div style={{ backgroundColor: lighterDocumentColor }} className="h-2" />

      <div
        style={{ flex: 1, minHeight: 600 }}
        className="flex w-full flex-nowrap bg-white justify-between gap-10 p-10 px-20"
      >
        {/* =============Left section======================= */}
        <div style={{ flex: 0.4 }}>
          <BusinessDetails businessDetails={f["Business Details"]} />
        </div>

        {/* ============Right section======================= */}
        <div style={{ flex: 0.6 }} className="w-full overflow-hidden">
          <List title="DIFFERENTIATORS" data={f.differentiators} />
          <CodesAndCertifications
            codesAndCertification={f.codesAndCertification}
          />
          <MBECertificate mbeCertificate={f.mbeCertificate} />
          <CompanyCodes companyCodes={f.companyCodes} />
        </div>
      </div>

      <div style={{ backgroundColor: lighterDocumentColor }} className="h-2" />
      <Footer documentColor={f.documentColor} companyCodes={f.companyCodes} />
    </WatchPageHeight>
  );
};

const Heading = React.memo(function _({
  color,
  logo,
}: {
  color: string;
  logo?: string;
}) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="pb-4 pt-10 flex flex-col justify-end items-center"
    >
      <div className="w-28 h-28 mb-4">
        {logo && (
          <img
            width={112}
            height={112}
            src={logo}
            className="w-full"
            alt="logo"
          />
        )}
      </div>
      <AutoTextColor>
        <p className={`tracking-widest font-thin text-5xl`}>
          CAPABILITY STATEMENT
        </p>
      </AutoTextColor>
    </div>
  );
});

const BusinessDetails = ({ businessDetails }: { businessDetails: BS }) => {
  return (
    <div>
      <p className={styles.section}>{businessDetails.about}</p>
      <ul className="w-full">
        <li className="flex items-center mb-3">
          <BsPerson size={20} className="mr-3 flex-shrink-0" />
          <p>{businessDetails.name}</p>
        </li>
        <li className="flex items-center mb-3">
          <MdOutlineLocalPhone size={20} className="mr-3 flex-shrink-0" />
          <a href={`tel:${businessDetails.phoneNumber.replace(/[\D]/g, "")}`}>
            <p>{businessDetails.phoneNumber}</p>
          </a>
        </li>
        <li className="flex items-center mb-3">
          <AiOutlineMail size={20} className="mr-3 flex-shrink-0" />
          <p>{businessDetails.email}</p>
        </li>
        <li className="flex items-center mb-3">
          <GiWorld size={20} className="mr-3 flex-shrink-0" />
          <a href={"https://" + businessDetails.website}>
            <p>{businessDetails.website}</p>
          </a>
        </li>
        <li className="flex items-center mb-3">
          <BsPinMapFill size={20} className="mr-3 flex-shrink-0" />
          <p>{businessDetails.address}</p>
        </li>
      </ul>
    </div>
  );
};

const CompanyCodes = ({
  companyCodes,
}: Pick<CapabilityForm, "companyCodes">) => {
  const codes = Object.keys(companyCodes) as CompanyCodesKeys[];
  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>COMPANY CODES</h1>
      <div className={`flex flex-wrap justify-between`}>
        {codes.map((item) => {
          if (!companyCodes[item]) return null;
          return (
            <div key={item} className="mr-3 mb-3">
              <p className="font-bold">{item}</p>
              <p>{companyCodes[item]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Footer = ({
  companyCodes,
  documentColor,
}: Pick<CapabilityForm, "documentColor" | "companyCodes">) => {
  const { DUNS, CAGE } = companyCodes;
  return (
    <div
      style={{ backgroundColor: documentColor }}
      className="flex items-center py-8 justify-center"
    >
      <AutoTextColor className="flex">
        <p>
          <b>DUNS</b>: {DUNS}{" "}
        </p>
        <p className="mx-3">|</p>
        <p>
          <b>CAGE</b>: {CAGE}{" "}
        </p>
      </AutoTextColor>
    </div>
  );
};

export default TemplateOneWithRef;
