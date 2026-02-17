import type { TaskItemProps } from '../../types';



export default function TaskItem({task}: TaskItemProps) {
  
  return (
    <div>
      <h3>{task.title}</h3>
      <h2>{task.priority}</h2>
      <h2>{task.description}</h2>
      <h3>{task.dueDate}</h3>

      <select name="status" value={task.status} >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button type="button" >Delete</button>
    </div>
  );
}