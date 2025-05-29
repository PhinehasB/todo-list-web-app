import dummyTasks from "@/app/data/dummyTasks";
import TaskCard from "@/components/TaskCard";
import TaskDetails from "@/components/TaskDetails";
import { Card } from "@/components/ui/card";

export default function MyTask() {
  return (
    <div className="flex flex-col gap-2">
      <Card className="px-3 py-2 ">Filters go here</Card>
      <div className="grid grid-cols-2 gap-2">
        <Card className="px-3 py-2">
          <h2>My Tasks</h2>
          <div className="flex flex-col gap-2 h-[33rem] overflow-hidden overflow-y-auto">
            {dummyTasks.map((task) => (
              <TaskCard
                key={task.title}
                title={task.title}
                Description={task.Description}
                thumbnail={task.thumbnail}
                status={task.status}
                priority={task.priority}
                createdAt={task.createdAt}
              />
            ))}
          </div>
        </Card>
        <Card className="px-3 py-2">
          <TaskDetails
            title={"Finish project report"}
            Description={
              "Complete the final report for the project and submit it to the manager."
            }
            priority={"Extreme"}
            createdAt={"5/18/2025"}
            status={"In progress"}
            thumbnail={"/dummy3.jpg"}
            vital={true}
          />
        </Card>
      </div>
    </div>
  );
}
