import { CapabilityForm } from "../../../@types";
import { htmlTemplateStyles as styles } from "../../Styles";
import { Heading } from "./styles";

const CodesAndCertifications = ({
  codesAndCertification,
}: Pick<CapabilityForm, "codesAndCertification">) => {
  return (
    <div className={`${styles.section}`}>
      <table className="w-full text-sm border-separate">
        <tbody>
          <tr className="text-left">
            <th className={`flex-1 text-left`}>
              <Heading>CODES & CERTIFICATIONS </Heading>
            </th>
            {["SIC", "NAIC"].map((i) => (
              <th key={i} className={`pl-4`}>
                <Heading>{i}</Heading>
              </th>
            ))}
          </tr>
          {codesAndCertification.map((item) => {
            const { naic, name, sic } = item;
            return (
              <tr key={item.id} className="text-left pb-9">
                <td className="align-top">
                  <p>{name}</p>
                </td>
                <td className="pl-4 align-top">{sic}</td>
                <td className="pl-4 align-top">{naic}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CodesAndCertifications;
