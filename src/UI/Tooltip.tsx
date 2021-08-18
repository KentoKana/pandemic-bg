import { ReactNode } from "react";
import { PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";

interface ITooltip {
  target: string;
  children: ReactNode;
  tooltipHeader?: string;
}

export const Tooltip = ({ target, children, tooltipHeader }: ITooltip) => {
  return (
    <UncontrolledPopover
      target={target}
      trigger={"legacy"}
      style={{ minWidth: 200 }}
    >
      {tooltipHeader && <PopoverHeader>{tooltipHeader}</PopoverHeader>}
      <PopoverBody>{children}</PopoverBody>
    </UncontrolledPopover>
  );
};
