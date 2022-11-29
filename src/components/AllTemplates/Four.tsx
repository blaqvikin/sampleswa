import { FC, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsPinMapFill } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { htmlTemplateStyles as styles } from "../Styles";
import "../Styles/styles.module.css";
import {
  BusinessDetails as BS,
  CapabilityForm,
  CompanyCodesKeys,
} from "../../@types";
import { useUpdateFormUIstate } from "../../hooks";
import WatchPageHeight from "../WatchPageHeight";
import { List } from "./sections/List";
import CodesAndCertifications from "./sections/CodesAndCertifications";
import MBECertificate from "./sections/MBECertificate";
import QRCode from "react-qr-code";

const TemplateOneWithRef: FC<{ state: CapabilityForm }> = ({
  state: formdetails,
}) => {
  const [uiState, setState, resetState] = useUpdateFormUIstate();
  useEffect(() => {
    resetState();
    setState({ ...uiState, "client list": true });
  }, []);

  return (
    <WatchPageHeight
      className={`h-full flex flex-col bg-white overflow-hidden p-6 ${styles.pageN}`}
    >
      <div
        className={`h-full flex-1 flex flex-col gap-3 text-xs md:text-sm overflow-hidden border-4 p-3 `}
        style={{ borderRadius: 10, borderColor: formdetails.documentColor }}
      >
        {/* ============Heading============= */}
        <div className="flex flex-grow-0 gap-2">
          {/* =========left======= */}
          <div style={{ flex: 0.4 }} className={`${styles.border}`}>
            <Logo logo={formdetails["Business Details"].logo} />
            <BusinessDetails value={formdetails["Business Details"]} />
          </div>

          {/* ==========Right============ */}
          <div
            style={{ flex: 0.6 }}
            className="flex flex-col flex-grow-0 gap-2"
          >
            <DunsAndCage value={formdetails.companyCodes} />
            <div className={`${styles.border} flex-1`}>
              <AboutAndCodes
                businessDetails={formdetails["Business Details"]}
                codes={formdetails["companyCodes"]}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 gap-2 min-h-[6in]">
          {/* =========left======= */}
          <div className="flex flex-col flex-[0.4]">
            <List
              title="Core Competencies"
              data={formdetails.coreCompetencies}
            />
            <div className="self-center">
              <Code {...formdetails["Business Details"]} />
            </div>
          </div>
          {/* ==========Right============ */}
          <div className="flex flex-[0.6] flex-col  gap-2">
            <div className={`${styles.border} flex-1`}>
              <List title="Client List" data={formdetails["client list"]} />
              <List
                title="Differentiators"
                data={formdetails.differentiators}
              />
              <CodesAndCertifications
                codesAndCertification={formdetails["codesAndCertification"]}
              />
              {formdetails["mbeCertificate"].length > 1 && (
                <MBECertificate mbeCertificate={formdetails.mbeCertificate} />
              )}
            </div>
          </div>
        </div>
      </div>
    </WatchPageHeight>
  );
};

const BusinessDetails = ({ value }: { value: BS }) => {
  return (
    <div>
      <ul className="w-full" id="businessDetails">
        <li className="flex items-center mb-3">
          <BsPerson size={20} className="mr-3 flex-shrink-0" />
          <p className={`${styles.detailsBorder}`}>{value.name}</p>
        </li>
        <li className="flex items-center mb-3">
          <MdOutlineLocalPhone size={20} className="mr-3 flex-shrink-0" />
          <a
            href={`tel:${value.phoneNumber.replace(/[\D]/g, "")}`}
            style={{ width: "100%" }}
          >
            <p className={`${styles.detailsBorder}`}>{value.phoneNumber}</p>
          </a>
        </li>
        <li className="flex items-center mb-3">
          <AiOutlineMail size={20} className="mr-3 flex-shrink-0" />
          <p className={`${styles.detailsBorder}`}>{value.email}</p>
        </li>
        <li className="flex items-center mb-3">
          <GiWorld size={20} className="mr-3 flex-shrink-0" />
          <p className={`${styles.detailsBorder}`}>{value.website}</p>
        </li>
        <li className="flex items-center mb-3">
          <BsPinMapFill size={20} className="mr-3 flex-shrink-0" />
          <p className={`${styles.detailsBorder}`}>{value.address}</p>
        </li>
      </ul>
    </div>
  );
};

const AboutAndCodes = ({
  businessDetails,
  codes,
}: {
  businessDetails: BS;
  codes: CapabilityForm["companyCodes"];
}) => {
  return (
    <>
      <div>
        <p className="font-extrabold text-2xl mb-2">CAPABILITY STATEMENT</p>
        <p className={""}>{businessDetails.about}</p>
      </div>
      <div className={`flex flex-wrap justify-around ${styles.companyCodes}`}>
        {businessDetails.entityType !== "" && (
          <div
            className={`${styles.border} flex flex-col content-center items-center`}
          >
            <p className={styles.heading}>ENTITY TYPE</p>
            <p>{businessDetails.entityType}</p>
          </div>
        )}
        {businessDetails.revenue !== "" && (
          <div
            className={`${styles.border} flex flex-col content-center items-center`}
          >
            <p className={styles.heading}>REVENUE</p>
            <p>{businessDetails.revenue}</p>
          </div>
        )}
        {(Object.keys(codes) as CompanyCodesKeys[]).map((item) => {
          return (
            <>
              {item !== "DUNS" && item !== "CAGE" && codes[item] && (
                <div
                  key={item}
                  className={`${styles.border} flex flex-col content-center items-center`}
                >
                  <p className={styles.heading}>{item}</p>
                  <p>{codes[item]}</p>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

const DunsAndCage = ({ value }: { value: CapabilityForm["companyCodes"] }) => {
  return (
    <div className={`flex justify-end gap-12 ${styles.border}`}>
      <p>
        <b>DUNS</b> {value.DUNS}
      </p>
      <p>
        <b>CAGE</b> {value.CAGE}
      </p>
    </div>
  );
};
const Logo = ({ logo }: { logo?: string }) => {
  return (
    <div className="w-28 h-28 ml-auto mr-auto mb-3">
      {logo && (
        <img
          width={112}
          alt="Business logo"
          height={112}
          src={logo}
          className="w-full"
        />
      )}
    </div>
  );
};
const Code = ({
  email,
  website,
  name,
  phoneNumber,
}: CapabilityForm["Business Details"]) => {
  const info = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phoneNumber}
EMAIL;TYPE=work:${email}
URL:${website}
END:VCARD`;
  const isComplete = email && website && name && phoneNumber;

  return <>{isComplete ? <QRCode size={200} value={info} /> : null}</>;
};
export default TemplateOneWithRef;
