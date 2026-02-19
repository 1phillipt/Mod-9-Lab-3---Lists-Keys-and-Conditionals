import React, { useState } from 'react'
import type { Task, TaskStatus } from '../types';
import { Tasks } from '../components/Tasks';
import { TaskList } from '../components/TaskList/TaskList';
import { TaskFilter } from '../components/TaskFilter/TaskFilter';




function TaskPage() {

 const [tasks, setTasks] = useState<Task[]>(Tasks);

  const[status, setStatus] = useState<TaskStatus | 'all' >('all');

  const[priority, setPriority ] = useState< 'all' | 'high' | 'medium' |'low'>('all');
 
    
  //changes the status of the task
   const onStatusChange = (taskId: string, newStatus: TaskStatus) => {
      setTasks((prev) => 
      prev.map((task) => 
        task.id === taskId ? {...task, status: newStatus} : task
       
      ));
   };

   const onDelete = (taskId: string) => {
    setTasks((prev) => 
    prev.filter((task) => task.id !== taskId ));
   }

   const filteredTasks = tasks.filter(task => {
  const statusMatch =
    status === 'all' || task.status === status;

  const priorityMatch =
    priority === 'all' || task.priority === priority;

  return statusMatch && priorityMatch;
});


   return (
  <>
    <TaskFilter onFilterChange={(filters) => {
      if (filters.status !== undefined) {
        setStatus(filters.status);
      }
      if (filters.priority !== undefined) {
        setPriority(filters.priority);
      }
    }} />

    <TaskList
      tasks={filteredTasks}
      onStatusChange={onStatusChange}
      onDelete={onDelete}
    />
  </>
)





}

export default TaskPage