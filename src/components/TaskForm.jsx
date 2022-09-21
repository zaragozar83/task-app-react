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
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                placeholder="Type your Taks" />
            <br/>
            <textarea onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Type Description" />
            <button>
                Add
            </button>
        </form>
  )
}

export default TaskForm