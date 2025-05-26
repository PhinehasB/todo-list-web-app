"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Button } from "./ui/button";
import { ReactNode, useState } from "react";

type menuItemTypes = {
  name: string;
  icon?: ReactNode;
  action: () => void;
};

type contentProps = {
  menuLable: string;
  menuItem: menuItemTypes[];
};

type Props = {
  trigger: ReactNode;
  content: contentProps[];
};

export default function CustomDropdown({ trigger, content }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-40" align="end">
        {content.map((item, i) => (
          <div key={i}>
            {item.menuLable && (
              <DropdownMenuLabel className="font-bold">
                {item.menuLable}
              </DropdownMenuLabel>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {item.menuItem.map((menuItem, i) => (
                <DropdownMenuItem key={i} onClick={menuItem.action}>
                  {menuItem.icon}
                  {menuItem.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
