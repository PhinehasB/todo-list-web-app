"use client";

import Search from "./Search";
import { ToggleTheme } from "./ToggleTheme";

export default function TopNav() {
  return (
    <nav className="flex justify-between items-center h-14 px-14">
      <div>
        <span className="text-red-400">Dash</span>
        <span>board</span>
      </div>

      <div>
        <Search />
      </div>

      <ToggleTheme />
    </nav>
  );
}
