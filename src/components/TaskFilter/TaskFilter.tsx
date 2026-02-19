import type { TaskFilterProps, TaskStatus } from "../../types";

type PriorityLevel = "low" | "medium" | "high";

// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  return (
    <>
      <select
        onChange={(e) => onFilterChange({ status: e.target.value as TaskStatus })}
      >
        <option value="all" defaultChecked>All</option>
        <option value="pending">pending</option>
        <option value="in-progress">in-progress</option>
        <option value="completed">completed</option>
      </select>

      <select onChange={(e) => onFilterChange({ priority: e.target.value as PriorityLevel })}>
         <option value="all">All</option>
         <option value="high">high</option>
         <option value="medium">medium</option>
         <option value="low">low</option>

      </select>
    </>
  );
}
