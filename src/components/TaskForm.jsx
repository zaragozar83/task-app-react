import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
  
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { addTask } = useContext(TaskContext)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <div className='max-w-md mx-auto'>
            <form className='bg-slate-700 px-10 mb-3' 
                onSubmit={handleSubmit}>
                    <h1 className='text-2xl font-bold text-white mb-3'>Create your Taks</h1>
                <input
                    className='bg-slate-300 p-3 w-full mb-2' 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                    placeholder="Type your Taks" />
                <textarea 
                    className='bg-slate-300 p-3 w-full mb-2' 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Type Description" />
                <button
                    className='bg-gray-600 hover:bg-gray-400 text-gray-300 px-3 py-1 rounded-sm'>
                    Add
                </button>
            </form>
        </div>
  )
}

export default TaskForm