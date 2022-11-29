import { htmlTemplateStyles as styles } from "../../Styles";
import { Heading } from "./styles";

interface Props {
  title: string;
  data: string[];
}

export const List = ({ data, title }: Props) => {
  return (
    <div className={styles.section}>
      <Heading>{title}</Heading>
      <ul className="list-disc ml-5">
        {data.map((item) => (
          <li key={item} className="mb-2 break-normal w-full">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
