import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Login screen here</p>
      <Link href={"/dashboard"}>
        <Button variant={"outline"}>Long In herr</Button>
      </Link>
    </div>
  );
}
