import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskCard({ task }) {

  const { deleteTask } = useContext(TaskContext)

  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
        <h2 className='text-xl font-bold capitalize'>{task.id}.- {task.title}</h2>
        <p className='text-gray-500 text-sm'>{task.description}</p>
        <button 
          className='bg-red-900 px-2 py-1 mt-3 rounded-md text-gray-300 hover:bg-red-700'
          onClick={() => deleteTask(task.id)}>
          Delete
        </button>
    </div>
  )
}

export default TaskCard