import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
import { Button, Collapse } from "reactstrap";

interface IAccordionProps {
  heading: string;
  children: ReactNode;
}
export const Accordion = ({ heading, children }: IAccordionProps) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <Button
        style={{ width: "100%", backgroundColor: "transparent" }}
        className="border-0 text-dark d-flex justify-content-between align-items-center"
        onClick={() => setCollapse((prev) => !prev)}
      >
        {heading}
        <FontAwesomeIcon icon={faAngleDown} />
      </Button>
      <Collapse isOpen={collapse}>
        <div className="p-3">{children}</div>
      </Collapse>
    </>
  );
};
