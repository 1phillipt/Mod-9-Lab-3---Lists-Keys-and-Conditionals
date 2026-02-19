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

      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <h2>{task.description}</h2>
      <h3>{task.dueDate}</h3>

      <select name="status" value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button type="button" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}