import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Search() {
  return (
    <div className="flex">
      <Input type="search" className="w-lg" />
      <Button
        variant="ghost"
        size="sm"
        className="-translate-x-9.5 translate-y-0.5"
      >
        {" "}
        <SearchIcon />
      </Button>
    </div>
  );
}
