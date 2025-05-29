export type TaskType = {
  title: string;
  thumbnail: string | File;
  priority: "Extreme" | "Moderate" | "Low";
  status: "Completed" | "In progress" | "Not started";
  createdAt: string;
  description: string;
  vital: boolean;
};
