"use client";

import { Bell, Calendar1Icon } from "lucide-react";
import CustomPopover from "./CustomPopover";
import Search from "./Search";
import { ToggleTheme } from "./ToggleTheme";
import { Calendar } from "./ui/calendar";

export default function TopNav() {
  const date = new Date();
  return (
    <nav className="flex justify-between items-center h-14 px-14">
      <div className="text-3xl font-extrabold">
        <span className="text-red-400">Dash</span>
        <span>board</span>
      </div>

      <div>
        <Search />
      </div>

      <div className="flex items-center justify-between gap-8">
        <div className="flex gap-3">
          <CustomPopover trigger={<Bell />} content={<div>content here</div>} />
          <CustomPopover
            trigger={<Calendar1Icon />}
            content={
              <Calendar
                mode="single"
                // selected={date}
                // onSelect={setDate}
                className="rounded-md border"
              />
            }
          />
        </div>

        <div>
          <p className=" font-bold">
            {
              new Intl.DateTimeFormat("en-US", {
                dateStyle: "full",
              })
                .format(date)
                .split(",")[0]
            }
          </p>
          <p className="text-blue-500">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }).format(date)}
          </p>
        </div>

        <ToggleTheme />
      </div>
    </nav>
  );
}
