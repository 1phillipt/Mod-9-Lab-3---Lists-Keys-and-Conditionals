import { useState } from 'react'
import type { Task, TaskStatus } from '../types';
import { Tasks } from '../components/Tasks';
import { TaskList } from '../components/TaskList/TaskList';




function taskPage() {

 const [tasks, setTasks] = useState<Task[]>(Tasks);

  const[status, setStatus] = useState<TaskStatus>('pending');

    console.log(tasks); 

   const onStatusChange = (taskId: string, newStatus: TaskStatus) => {
      setTasks(() => 
      tasks.map((task) => 
        task.id === taskId ? {...task, status: newStatus} : task
       
      ));console.log(tasks); 
   };

   const onDelete = (taskId: string) => {
    setTasks(() => 
    tasks.filter((task) => task.id !== taskId ));
   }

  return (
    <>
      <TaskList tasks={tasks} onStatusChange={onStatusChange} onDelete={onDelete}/>
    </>
  )



}

export default taskPage