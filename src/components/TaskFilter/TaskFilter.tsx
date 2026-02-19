// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }

import type { TaskStatus } from "../../types";

interface TaskFilter{
    onFilterChange: (filters: {
        status?: TaskStatus;
        priority?: 'low' | 'medium' | 'high';
    }) => void;
}

type TaskFilterProps = {
  onFilterChange: TaskFilter;
}

export function TaskFilter({onFilterChange}: TaskFilterProps) {

    return (
        <>
          
        
        </>
    )
}