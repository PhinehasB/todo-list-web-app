"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SideNav() {
  const pathname = usePathname();
  const sideLinks = [
    {
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      href: "/my-task",
      label: "My Task",
    },
    {
      href: "/settings",
      label: "Settings",
    },
  ];
  return (
    <div className="w-sm h-[92vh] ">
      <div className="flex flex-col h-full">
        <div className="text-center ">
          <Avatar className="mx-auto h-28 w-28">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="mt-3 font-bold text-xl">FirstName</p>
          <p>email@mailProvider.com</p>
        </div>
        <div className="h-full flex flex-col justify-between p-5 text-lg font-bold">
          <div className="flex flex-col gap-2">
            {sideLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className={`rounded-md hover:bg-red-300 hover:text-white px-4 py-2 ${
                  pathname.includes(link.href) && "bg-red-400 text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button
            variant={"outline"}
            className="rounded-md hover:bg-red-400 hover:text-white py-5 font-bold text-lg"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
