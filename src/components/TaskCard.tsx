import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Circle } from "lucide-react";
import Image from "next/image";

export default function TaskCard() {
  return (
    <Card className="flex flex-row">
      <div className="pl-6">
        <Circle />
      </div>
      <div className=" w-full">
        <CardHeader className="pl-0">
          <CardTitle className="text-lg font-bold text-start">
            Task Title
          </CardTitle>
          <div className="flex">
            <CardDescription>
              <p>
                Task Description Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Dolor eveniet omnis voluptates error neque,
                quidem rerum placeat vel fuga ex tempora earum illo distinctio
                minus quia, autem tempore? Id, voluptatum?
              </p>
            </CardDescription>

            <div className="rounded-md border overflow-hidden 3xl:h-40 3xl-w-80 aspect-square ">
              <Image
                src="/dummy1.jpg"
                alt="@task image"
                width={480}
                height={240}
                className="aspect-square 3xl:h-40 3xl-w-80 object-cover object-center"
              />
            </div>
          </div>
        </CardHeader>
        <CardFooter className="pl-0 flex justify-between">
          <div className="flex gap-5">
            <span className="flex gap-1">
              Priority:<p>Moderate</p>
            </span>
            <span className="flex gap-1">
              Status:<p>Not Started</p>
            </span>
          </div>
          <p className="text-muted-foreground">Card Footer</p>
        </CardFooter>
      </div>
    </Card>
  );
}
