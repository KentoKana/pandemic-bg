import { ReactNode } from "react";
import {
  Popover,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

interface ITooltip {
  target: string;
  children: ReactNode;
  tooltipHeader?: string;
  type: "controlled" | "uncontrolled";
  popoverOpen?: boolean;
}

export const Tooltip = ({
  target,
  children,
  tooltipHeader,
  type,
  popoverOpen,
}: ITooltip) => {
  return type === "uncontrolled" ? (
    <UncontrolledPopover
      target={target}
      trigger={"hover"}
      style={{ minWidth: 200 }}
    >
      {tooltipHeader && <PopoverHeader>{tooltipHeader}</PopoverHeader>}
      <PopoverBody>{children}</PopoverBody>
    </UncontrolledPopover>
  ) : (
    <Popover target={target} isOpen={popoverOpen}>
      {tooltipHeader && <PopoverHeader>{tooltipHeader}</PopoverHeader>}
      <PopoverBody>{children}</PopoverBody>
    </Popover>
  );
};
