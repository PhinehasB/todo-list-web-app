import dummyTasks from "@/app/data/dummyTasks";
import { TaskType } from "@/app/Types/TaskTypes";
import RadialChart from "@/components/RadialChart";
import TaskCard from "@/components/TaskCard";
import {
  CalendarCheck,
  CalendarCheck2,
  CalendarClock,
  Plus,
} from "lucide-react";

type newTaskType = Omit<TaskType, "vital">;

export default function page() {
  const check: Array<Pick<TaskType, "status"> & { data: TaskType[] }> = [
    {
      status: "Completed",
      data: dummyTasks.filter((task) => task.status === "Completed"),
    },
    {
      status: "In progress",
      data: dummyTasks.filter((task) => task.status === "In progress"),
    },
    {
      status: "Not started",
      data: dummyTasks.filter((task) => task.status === "Not started"),
    },
  ];

  // console.log(check);

  return (
    <div>
      <span className=" font-bold text-2xl mb-5 flex gap-2">
        {" "}
        Welcome back, <p className="text-red-400">FirstName</p>
        <span className="animate-pulse">👋</span>
      </span>
      <div className="grid grid-cols-2 rounded-md shadow p-3 border gap-2">
        <div className="rounded-md shadow p-3 border">
          <div className="flex justify-between mb-3">
            <div className="flex gap-1">
              <CalendarClock className="text-red-400" /> <p>To-do</p>
            </div>

            <div className="flex gap-1">
              <Plus className="text-red-400" /> <p>Add Task</p>
            </div>
          </div>
          <div className="overflow-y-auto h-[72vh] flex flex-col gap-2">
            {dummyTasks.map((task: newTaskType) => (
              <TaskCard
                key={task.title}
                Description={task.Description}
                createdAt={task.createdAt}
                priority={task.priority}
                status={task.status}
                thumbnail={task.thumbnail}
                title={task.title}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 h-full">
          <div className="rounded-md shadow p-3 border flex-1">
            {" "}
            <div className="flex gap-1 mb-3">
              <CalendarCheck2 className="text-red-400" /> <p>Task Status</p>
            </div>
            <div className=" grid grid-cols-3 items-center justify-between h-full w-full">
              {check.map((info, _, allInfo) => (
                <RadialChart
                  key={info.status}
                  status={info.status}
                  count={info.data.length}
                  total={allInfo.length}
                />
              ))}
              {/* <RadialChart status="In progress" count={150} total={500} />
              <RadialChart status="Not started" count={20} total={500} /> */}
            </div>
          </div>
          <div className="rounded-md shadow p-3 border flex-1">
            {" "}
            <div className="flex gap-1 mb-3">
              <CalendarCheck className="text-red-400" /> <p>Task Completed</p>
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto h-[32vh]">
              {dummyTasks
                .filter((task) => task.status === "Completed")
                .map((task) => (
                  <TaskCard
                    key={task.title}
                    Description={task.Description}
                    createdAt={task.createdAt}
                    priority={task.priority}
                    status={task.status}
                    thumbnail={task.thumbnail}
                    title={task.title}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
