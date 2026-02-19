import type { Task, TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

// export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }
export function TaskList({tasks, onStatusChange, onDelete}: TaskListProps) {

return tasks.map((task) => (
  <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
))}
