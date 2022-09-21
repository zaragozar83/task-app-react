import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([])

  function addTask(taskTitle, taskDescription) {
    
    setTasks([...tasks, {
      id: tasks.length,
      title: taskTitle,
      description: taskDescription
    }])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter( task => task.id !== taskId))
  }

  useEffect(() => {
      setTasks(data)
  }, [])

  return (
    <TaskContext.Provider 
      value={{
        tasks,
        addTask,
        deleteTask
        }}>
        {props.children}
    </TaskContext.Provider>
  )
}