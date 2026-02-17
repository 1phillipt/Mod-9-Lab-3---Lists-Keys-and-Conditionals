import type { Task, TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

// export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }
export function TaskList({tasks, onStatusChange, onDelete}: TaskListProps) {

return tasks.map((task) => (
  <div key={task.id}>
    <h3>{TaskItem({task, onStatusChange, onDelete})}</h3>   
  </div>
))}
