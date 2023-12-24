import Task from "./Task";

const TaskList = ({taskData}) => {
    return (
        <div className="task-list-div">
            {taskData.map((task) => {
                return <Task value={task}/>
            })}
        </div>
    )
}

export default TaskList;