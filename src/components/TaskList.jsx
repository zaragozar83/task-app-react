import { useContext } from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'

function TaskList() {
  
    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1>Empty Tasks</h1>
    }

    return (
    <>{
        tasks.map(task => (
            <TaskCard key={task.id} task={task}/>
        ))   
    }</>
  )
}

export default TaskList