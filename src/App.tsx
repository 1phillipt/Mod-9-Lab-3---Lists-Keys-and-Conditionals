import { useState } from 'react'

import './App.css'
import {TaskList} from './components/TaskList/TaskList'
import type { Task, TaskStatus } from './types'
import {Tasks} from './components/Tasks'



function App() {
  const [tasks, setTasks] = useState<Task[]>(Tasks);

  const[status, setStatus] = useState<TaskStatus>('pending');

   const onStatusChange = (taskId: string, newStatus: TaskStatus) => {
      setStatus(() => newStatus);
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

export default App
