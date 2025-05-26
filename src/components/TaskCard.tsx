"use client";
import { TaskType } from "@/app/Types/TaskTypes";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Circle, Ellipsis, Eye, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import CustomDropdown from "./CustomDropdown";
import { toast } from "sonner";

export default function TaskCard({
  Description,
  createdAt,
  priority,
  status,
  thumbnail,
  title,
}: Omit<TaskType, "vital">) {
  return (
    <Card className="flex flex-row aspect-21/9">
      <div className="pl-6">
        <Circle
          className={cn(
            status === "Not started" && "text-red-400",
            status === "In progress" && "text-blue-400",
            status === "Completed" && "text-green-400"
          )}
        />
      </div>
      <div className=" w-full">
        <CardHeader className="pl-0">
          <CardTitle className="text-lg font-bold text-start flex items-center justify-between">
            {title}
            <CustomDropdown
              trigger={
                <Ellipsis className="hover:text-gray-300 cursor-pointer -translate-y-1" />
              }
              content={[
                {
                  menuLable: "Actions",
                  menuItem: [
                    {
                      name: "View",
                      icon: <Eye />,
                      action: () => toast.success(` was Edited`),
                    },
                    {
                      name: "Edit",
                      icon: <SquarePen />,
                      action: () => toast.success(` was Edited`),
                    },
                    {
                      name: "Delete",
                      icon: <Trash2 />,
                      action: () => toast.success(` was Deleted`),
                    },
                  ],
                },
              ]}
            />
          </CardTitle>
          <div className="flex">
            <CardDescription className="basis:124/23 xl:basis-69/23 2xl:basis-2/3">
              <p>{Description}</p>
            </CardDescription>

            <div className="rounded-md border overflow-hidden 3xl:h-40  aspect-square basis-1\23 2xl:basis-1/3">
              {typeof thumbnail === "string" ? (
                <Image
                  src={thumbnail}
                  alt="@task image"
                  width={480}
                  height={240}
                  className="aspect-square 3xl:h-40  object-cover object-center"
                />
              ) : thumbnail instanceof File ? (
                <Image
                  src={URL.createObjectURL(thumbnail)}
                  alt="@task image"
                  width={480}
                  height={240}
                  className="aspect-square 3xl:h-40  object-cover object-center"
                />
              ) : null}
            </div>
          </div>
        </CardHeader>
        <CardFooter className="pl-0 flex justify-between">
          <div className="flex gap-5">
            <span className="flex gap-1">
              Priority:
              <p
                className={cn(
                  priority === "Extreme" && "text-red-400",
                  priority === "Moderate" && "text-blue-400",
                  priority === "Low" && "text-green-400"
                )}
              >
                {priority}
              </p>
            </span>
            <div className="hidden 2xl:contents">
              <span className="flex gap-1 ">
                Status:
                <p
                  className={cn(
                    status === "Not started" && "text-red-400",
                    status === "In progress" && "text-blue-400",
                    status === "Completed" && "text-green-400"
                  )}
                >
                  {status}
                </p>
              </span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Created on: {new Intl.DateTimeFormat().format(new Date(createdAt))}
          </p>
        </CardFooter>
      </div>
    </Card>
  );
}
