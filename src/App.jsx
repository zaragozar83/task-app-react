import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tasks as data} from './data/tasks'
import { useEffect, useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
      setTasks(data)
  }, [])

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

  return (
    <>
      <TaskForm createTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App