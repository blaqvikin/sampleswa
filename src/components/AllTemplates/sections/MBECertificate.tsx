import { CapabilityForm } from "../../../@types";
import { htmlTemplateStyles as styles } from "../../Styles";
import { Heading } from "./styles";

const MBECertificate = ({
  mbeCertificate,
}: Pick<CapabilityForm, "mbeCertificate">) => {
  return (
    <div className={`${styles.section}`}>
      <Heading className="mb-2">MBE CERTIFICATE EXPIRATION</Heading>
      <div className="flex flex-wrap gap-x-6">
        {mbeCertificate.map((item) => {
          const { name, id, year } = item;
          return (
            <div key={id} className="mb-2">
              <p className="break-words font-medium">{name}</p>
              <p>{year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MBECertificate;
