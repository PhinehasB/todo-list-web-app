import { TaskType } from "@/app/Types/TaskTypes";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function TaskDetails({
  title,
  Description,
  thumbnail,
  priority,
  status,
  createdAt,
}: TaskType) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <div className="rounded-md border overflow-hidden h-40 aspect-square">
          {typeof thumbnail === "string" ? (
            <Image
              src={thumbnail}
              alt="@task image"
              width={480}
              height={240}
              className="aspect-square h-40  object-cover object-center"
            />
          ) : thumbnail instanceof File ? (
            <Image
              src={URL.createObjectURL(thumbnail)}
              alt="@task image"
              width={480}
              height={240}
              className="aspect-square h-40  object-cover object-center"
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-extrabold">{title}</h2>
          <span className="flex gap-1">
            Priority:
            <p
              className={cn(
                priority === "Extreme" && "text-red-400",
                priority === "Moderate" && "text-blue-400",
                priority === "Low" && "text-green-400",
                "font-semibold"
              )}
            >
              {priority}
            </p>
          </span>
          <span className="flex gap-1">
            Status:
            <p
              className={cn(
                status === "Not started" && "text-red-400",
                status === "In progress" && "text-blue-400",
                status === "Completed" && "text-green-400",
                "font-semibold"
              )}
            >
              {status}
            </p>
          </span>
          <p className="text-gray-400 dark:text-gray-50">
            Created at: {createdAt}
          </p>
        </div>
      </div>
      <div>{Description}</div>
    </div>
  );
}
