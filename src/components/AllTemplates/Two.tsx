import React, { FC, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsPinMapFill } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { htmlTemplateStyles as styles } from "../Styles";
import {
  BusinessDetails as BS,
  CapabilityForm,
  CompanyCodesKeys,
} from "../../@types";
import { useUpdateFormUIstate } from "../../hooks";
import WatchPageHeight from "../WatchPageHeight";
import createStyledComponents from "../../Utils/createStyledComponent";
import MBECertificate from "./sections/MBECertificate";
import CodesAndCertifications from "./sections/CodesAndCertifications";
import { List } from "./sections/List";

const TemplateOneWithRef: FC<{ state: CapabilityForm }> = ({
  state: formDetails,
}) => {
  const [, , resetState] = useUpdateFormUIstate();
  useEffect(() => {
    resetState();
  }, []);

  return (
    <WatchPageHeight
      className={`flex flex-col p-14 pb-4 h-full bg-white text-xs md:text-sm overflow-hidden ${styles.pageN}`}
      style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
    >
      <div className="flex justify-end gap-12">
        <p>
          <b>DUNS</b> {formDetails.companyCodes.DUNS}
        </p>
        <p>
          <b>CAGE</b> {formDetails.companyCodes.CAGE}
        </p>
      </div>
      {/* ============Heading============= */}
      <div
        className="flex gap-6 border-t-2 border-b-2 py-10 my-5 w-full"
        style={{ borderColor: formDetails.documentColor }}
      >
        {/* =========left======= */}
        <div className="flex-[0.4]">
          <div className="w-28 mb-3 h-28">
            {formDetails["Business Details"].logo && (
              <img
                width={112}
                alt="Business logo"
                height={112}
                src={formDetails["Business Details"].logo}
                className="w-full"
              />
            )}
          </div>
          <BusinessDetails businessDetails={formDetails["Business Details"]} />
        </div>

        {/* ==========Right============ */}
        <div className="flex flex-col flex-[0.6]">
          <div className="mb-4">
            <p className="font-extrabold text-2xl mb-4">CAPABILITY STATEMENT</p>
            <p className={""}>{formDetails["Business Details"].about}</p>
          </div>
          <div
            className={`flex flex-wrap justify-start ${styles.companyCodes}`}
          >
            {formDetails["Business Details"].entityType !== "" && (
              <div>
                <p className={styles.heading}>ENTITY TYPE</p>
                <p>{formDetails["Business Details"].entityType}</p>
              </div>
            )}
            {formDetails["Business Details"].revenue !== "" && (
              <div>
                <p className={styles.heading}>REVENUE</p>
                <p>{formDetails["Business Details"].revenue}</p>
              </div>
            )}
            {(Object.keys(formDetails.companyCodes) as CompanyCodesKeys[]).map(
              (item: CompanyCodesKeys) => {
                const displayItem =
                  item !== "DUNS" &&
                  item !== "CAGE" &&
                  formDetails.companyCodes[item];
                if (!displayItem) return null;
                return (
                  <div key={item} className="">
                    <p className={styles.heading}>{item}</p>
                    <p>{formDetails.companyCodes[item]}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <div
        className="flex flex-1 border-b-2 gap-6 "
        style={{ borderColor: formDetails.documentColor }}
      >
        <div style={{ flex: 0.4 }}>
          <List title="CORE COMPETENCIES" data={formDetails.coreCompetencies} />
        </div>

        <div style={{ flex: 0.6 }}>
          <List title="DIFFERENTIATORS" data={formDetails.differentiators} />

          <CodesAndCertifications
            codesAndCertification={formDetails.codesAndCertification}
          />

          <MBECertificate mbeCertificate={formDetails.mbeCertificate} />
        </div>
      </div>

      <div className="flex text-white items-center py-8 justify-center"></div>
    </WatchPageHeight>
  );
};

const BusinessDetails = ({ businessDetails }: { businessDetails: BS }) => {
  return (
    <ul className="flex flex-col gap-2 px-2">
      <ItemList>
        <BsPerson size={20} className="flex-shrink-0" />
        <p>{businessDetails.name}</p>
      </ItemList>
      <ItemList>
        <MdOutlineLocalPhone size={20} className=" flex-shrink-0" />
        <a
          className=""
          href={`tel:${businessDetails.phoneNumber.replace(/[\D]/g, "")}`}
        >
          <p>{businessDetails.phoneNumber}</p>
        </a>
      </ItemList>
      <ItemList>
        <AiOutlineMail size={20} className="mr-3 flex-shrink-0" />
        <p>{businessDetails.email}</p>
      </ItemList>
      <ItemList>
        <GiWorld size={20} className="mr-3 flex-shrink-0" />
        <p>{businessDetails.website}</p>
      </ItemList>
      <ItemList>
        <BsPinMapFill size={20} className="flex-shrink-0" />
        <p className="">{businessDetails.address}</p>
      </ItemList>
    </ul>
  );
};

const ItemList = createStyledComponents("flex items-center gap-3", "li");
export default TemplateOneWithRef;
