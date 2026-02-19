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

  <div className="task-header">
    <div>
      <p className="task-title">{task.title}</p>
      <p className="task-description">{task.description}</p>
    </div>

    <div className="task-actions">
      <select
        value={task.status}
        onChange={(e) =>
          onStatusChange(task.id, e.target.value as TaskStatus)
        }
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  </div>

  <div className="task-footer">
    <p className={`priority ${task.priority}`}>
      Priority: {task.priority}
    </p>
    <p className="due-date">
      Due: {task.dueDate}
    </p>
  </div>

</div>

  );
}