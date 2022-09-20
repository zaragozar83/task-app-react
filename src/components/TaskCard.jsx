
function TaskCard({ task, deleteTask }) {

  return (
    <>
        <h2>{task.id}.- {task.title}</h2>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
    </>
  )
}

export default TaskCard