import TaskCard from './TaskCard'

function TaskList({tasks, deleteTask}) {
  
    if (tasks.length === 0) {
        return <h1>Empty Tasks</h1>
    }

    return (
    <>{
        tasks.map(task => (
            <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
        ))   
    }</>
  )
}

export default TaskList