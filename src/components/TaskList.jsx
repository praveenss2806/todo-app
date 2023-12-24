import Task from "./Task";

const TaskList = ({taskData}) => {
    return (
        <div className="task-list-div">
            <Task value={taskData[0]}/>
        </div>
    )
}

export default TaskList;