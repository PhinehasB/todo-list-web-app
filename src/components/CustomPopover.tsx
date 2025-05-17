import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode } from "react";

type PopoverPropTypes = {
  trigger: ReactNode | string;
  content: ReactNode | string;
  contentClassName?: string;
};

export default function CustomPopover({
  trigger,
  content,
  contentClassName,
}: PopoverPropTypes) {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        {trigger}
      </PopoverTrigger>
      <PopoverContent className={contentClassName}>{content}</PopoverContent>
    </Popover>
  );
}
