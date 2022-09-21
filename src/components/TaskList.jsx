import { useContext } from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'

function TaskList() {
  
    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className='text-white text-4xl font-bold text-center'>Empty Tasks</h1>
    }

    return (
    <div className='grid grid-cols-5 gap-2'>{
        tasks.map(task => (
            <TaskCard key={task.id} task={task}/>
        ))   
    }</div>
  )
}

export default TaskList