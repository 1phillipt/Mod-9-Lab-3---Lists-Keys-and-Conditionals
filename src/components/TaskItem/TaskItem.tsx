import type { TaskItemProps, TaskStatus } from '../../types';



// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }

// export interface TaskItemProps {
//   task: Task;
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }

export default function TaskItem({task, onDelete, onStatusChange}: TaskItemProps) {
  
  return (
    <div className="task-card">

      <p className="task-title">{task.title}</p>
      <p className="task-description">{task.description}</p>
      <p>{task.description}</p>
      <p>{task.id}</p>
      <p>{task.dueDate}</p>

      <select name="status" value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button type="button" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}