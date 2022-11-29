import { useAppDispatch } from "../../hooks/reduxHooks";
import BusinessDetails from "./BusinessDetails";
import { Formik } from "formik";
import createStyledComponents from "../../Utils/createStyledComponent";
import StringArrayForm from "./StringArrayForm";
import CodesAndCertificationForm from "./CodesAndCertificationForm";
import CompanyCodes from "./CompanyCodes";
import CertificationForm from "./Certification";
import { FC, PropsWithChildren, useCallback, useState } from "react";
import { TbArrowsMinimize } from "react-icons/tb";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { updateStateWithArray } from "../../redux/features/FormInfo";
import { StateWithArrayStructure } from "../../@types";

function Forms() {
  const dispatch = useAppDispatch();
  const updateArray = useCallback(
    (name: keyof StateWithArrayStructure, value: any[]) => {
      dispatch(updateStateWithArray({ name, value }));
    },
    [dispatch]
  );
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Container className="pt-20">
        <Paper title="Business Details">
          <BusinessDetails />
        </Paper>
        <Paper title="Company Codes">
          <CompanyCodes />
        </Paper>
        <Paper title="Differentiators">
          <StringArrayForm name="differentiators" onChange={updateArray} />
        </Paper>
        <Paper title="Client List">
          <StringArrayForm name="client list" onChange={updateArray} />
        </Paper>
        <Paper title="Core competencies">
          <StringArrayForm name="coreCompetencies" onChange={updateArray} />
        </Paper>
        <Paper title="Codes and Certification">
          <CodesAndCertificationForm onChange={updateArray} />
        </Paper>
        <Paper title="Certifications">
          <CertificationForm onChange={updateArray} />
        </Paper>
      </Container>
    </Formik>
  );
}

const Paper: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggle = () => setIsExpanded(!isExpanded);
  return (
    <div
      className={`bg-white p-8 lg:p-5 rounded-md shadow-md drop-shadow-sm ${
        isExpanded ? "" : ""
      } `}
    >
      <div className="flex justify-between item-center">
        <p className="font-semibold">{title}</p>
        <button onClick={toggle}>
          {isExpanded ? <TbArrowsMinimize /> : <BsArrowsAngleExpand />}
        </button>
      </div>
      {isExpanded && <div className="mt-2">{children}</div>}
    </div>
  );
};

const Container = createStyledComponents(
  `pb-20 px-5 bg-green-700 flex flex-col gap-10 `,
  "div"
);

export default Forms;
