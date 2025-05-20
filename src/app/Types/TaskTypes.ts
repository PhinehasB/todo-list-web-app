export type TaskType = {
  title: string;
  thumbnail: string | File;
  priority: "Extreme" | "Moderate" | "Low";
  status: "Completed" | "In progress" | "Not started";
  createdAt: string;
  Description: string;
  vital: boolean;
};
