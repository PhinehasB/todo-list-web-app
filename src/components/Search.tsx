import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import { toast } from "sonner";

export default function Search() {
  return (
    <div className="flex">
      <Input
        type="search"
        placeholder="Search your task here..."
        className="w-lg h-12"
      />
      <Button
        variant="ghost"
        size="lg"
        className="-translate-x-12.5 translate-y-0.5 h-11"
        // onClick={() => toast.success("Item searched")}
      >
        {" "}
        <SearchIcon className="m-0 h-10" />
      </Button>
    </div>
  );
}
