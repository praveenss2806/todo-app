import Task from "./Task";

const TaskList = ({taskData, updateTaskData}) => {
    const deleteTask = (value) => {
        updateTaskData(value)
    }

    return (
        <div className="task-list-div">
            {taskData.map((task) => {
                return <Task delteTask={deleteTask} value={task}/>
            })}
        </div>
    )
}

export default TaskList;