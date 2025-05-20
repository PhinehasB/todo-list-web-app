import TaskCard from "@/components/TaskCard";
import {
  CalendarCheck,
  CalendarCheck2,
  CalendarClock,
  Plus,
} from "lucide-react";

export default function page() {
  return (
    <div>
      <span className=" font-bold text-2xl mb-5 flex gap-2">
        {" "}
        Welcome back, <p className="text-red-400">FirstName</p>
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
          <TaskCard />
        </div>
        <div className="flex flex-col gap-2 h-full">
          <div className="rounded-md shadow p-3 border flex-1">
            {" "}
            <div className="flex gap-1 mb-3">
              <CalendarCheck2 className="text-red-400" /> <p>Task Status</p>
            </div>
            <p>Card goes here</p>
          </div>
          <div className="rounded-md shadow p-3 border flex-1">
            {" "}
            <div className="flex gap-1 mb-3">
              <CalendarCheck className="text-red-400" /> <p>Task Completed</p>
            </div>
            <div className="flex flex-col gap-3">
              <TaskCard />
              <TaskCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
