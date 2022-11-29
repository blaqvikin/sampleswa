import { FC, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsPinMapFill } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { htmlTemplateStyles as styles } from "../Styles";
import { CapabilityForm, CompanyCodesKeys } from "../../@types";
import AutoTextColor from "../AutoTextColor";
import { useUpdateFormUIstate } from "../../hooks";
import WatchPageHeight from "../WatchPageHeight";
import { splitArrayIntoSections } from "../../Utils";
import { List } from "./sections/List";
import MBECertificate from "./sections/MBECertificate";
import CodesAndCertifications from "./sections/CodesAndCertifications";

const TemplateOneWithRef: FC<{ state: CapabilityForm }> = ({ state: data }) => {
  const [, , resetState] = useUpdateFormUIstate();
  useEffect(() => {
    resetState();
  }, []);
  return (
    <WatchPageHeight
      className={`flex h-full bg-white text-xs md:text-sm overflow-hidden ${styles.pageN}`}
    >
      <div style={{ flex: 0.7 }} className="flex flex-col">
        <AutoTextColor>
          <p
            className={`font-extrabold text-2xl mt-24 py-3 w-3/4 pl-14 `}
            style={{ backgroundColor: data.documentColor }}
          >
            CAPABILITY STATEMENT
          </p>
        </AutoTextColor>
        <div className="px-14 flex-1 flex flex-col justify-between">
          <div className="flex my-4">
            <div className="flex-1">
              <div className="w-28 mb-3 h-28">
                {data["Business Details"].logo && (
                  <img
                    width={112}
                    height={112}
                    src={data["Business Details"].logo}
                    className="w-full"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col justify-around">
              <div className="">
                <p className="font-bold">ENTITY TYPE</p>
                <p>{data["Business Details"].entityType}</p>
              </div>
              <div className="">
                <p className="font-bold">REVENUE</p>
                <p>{data["Business Details"].revenue}</p>
              </div>
            </div>
          </div>

          <p className={styles.section} style={{ wordBreak: "break-word" }}>
            {data["Business Details"].about}
          </p>

          <div className={styles.section}>
            <List title="DIFFERENTIATORS" data={data.differentiators} />
          </div>

          <div className={`${styles.section}`}>
            <CodesAndCertifications
              codesAndCertification={data.codesAndCertification}
            />
          </div>

          <div className={`${styles.section}`}>
            <MBECertificate mbeCertificate={data.mbeCertificate} />
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: data.documentColor, flex: 0.3 }}
        className="px-7 flex flex-col justify-between pt-24 text-white"
      >
        <AutoTextColor className="mb-14 font-medium">
          <ul className="w-full">
            <li className="flex items-center mb-3">
              <BsPerson size={20} className="mr-3 flex-shrink-0" />
              <p>{data["Business Details"].name}</p>
            </li>
            <li className="flex items-center mb-3">
              <MdOutlineLocalPhone size={20} className="mr-3 flex-shrink-0" />
              <a
                href={`tel:${data["Business Details"].phoneNumber.replace(
                  /[\D]/g,
                  ""
                )}`}
              >
                <p>{data["Business Details"].phoneNumber}</p>
              </a>
            </li>
            <li className="flex items-center mb-3">
              <AiOutlineMail size={20} className="mr-3 flex-shrink-0" />
              <p>{data["Business Details"].email}</p>
            </li>
            <li className="flex items-center mb-3">
              <GiWorld size={20} className="mr-3 flex-shrink-0" />
              <a href={"https://" + data["Business Details"].website}>
                <p>{data["Business Details"].website}</p>
              </a>
            </li>
            <li className="flex items-center mb-3">
              <BsPinMapFill size={20} className="mr-3 flex-shrink-0" />
              <p>{data["Business Details"].address}</p>
            </li>
          </ul>
        </AutoTextColor>

        <AutoTextColor className={`${styles.section} mb-14`}>
          <List data={data.coreCompetencies} title="CORE COMPETENCIES" />
        </AutoTextColor>
        <AutoTextColor className={styles.section}>
          <h1 className={styles.heading}>COMPANY CODES</h1>
          <div className="flex flex-wrap">
            {data.companyCodes.DUNS && (
              <div className="ml-2 mb-4 flex-1">
                <p className="font-medium">DUNS</p>
                <p>{data.companyCodes.DUNS}</p>
              </div>
            )}
            {data.companyCodes.CAGE && (
              <div className="ml-2 mb-4 flex-1">
                <p className="font-medium">CAGE</p>
                <p>{data.companyCodes.CAGE}</p>
              </div>
            )}
          </div>
          {splitArrayIntoSections(
            Object.keys(data.companyCodes) as CompanyCodesKeys[],
            2
          ).map((item, index) => (
            <div key={index} className="flex flex-wrap">
              {item.map((item) => {
                return (
                  <div key={item} className="ml-2 mb-4 flex-1">
                    <p className="font-medium">{item}</p>
                    <p>{data.companyCodes[item]}</p>
                  </div>
                );
              })}
            </div>
          ))}
          {/* {f["companyCodes"].map((item) => {
              const name = Object.keys(item.info)[0];
              return (
                <div key={item.id} className="ml-2 mb-4">
                  <p className="font-medium">{name}</p>
                  <p>{item.info[name]}</p>
                </div>
              );
            })} */}
        </AutoTextColor>
      </div>
    </WatchPageHeight>
  );
};

export default TemplateOneWithRef;
