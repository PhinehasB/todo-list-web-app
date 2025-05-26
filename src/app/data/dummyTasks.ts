import { TaskType } from "../Types/TaskTypes";

const dummyTasks: TaskType[] = [
  {
    title: "Finish project report",
    thumbnail: "/dummy1.jpg",
    priority: "Extreme",
    status: "In progress",
    createdAt: "2025-05-19T10:00:00Z",
    Description:
      "Complete the final report for the project and submit it to the manager.",
    vital: true,
  },
  {
    title: "Buy groceries",
    thumbnail: "/dummy2.jpg",
    priority: "Low",
    status: "Not started",
    createdAt: "2025-05-18T15:30:00Z",
    Description: "Purchase milk, eggs, and bread from the supermarket.",
    vital: false,
  },
  {
    title: "Team meeting",
    thumbnail: "/dummy3.jpg",
    priority: "Moderate",
    status: "Completed",
    createdAt: "2025-05-17T09:00:00Z",
    Description: "Attend the weekly team sync-up meeting.",
    vital: false,
  },
];

export default dummyTasks;
