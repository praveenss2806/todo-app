import Box from "./components/Box.jsx";
import Heading from "./components/Heading.jsx";
import CreateTask from "./components/CreateTask.jsx";
import TaskList from './components/TaskList.jsx'
import { useState } from "react";

const App = () => {
    const [taskData, setTaskData] = useState([])

    const createTask = (task) => {
        setTaskData([task,...taskData])
    }

    const deleteTask = (value) => {
        setTaskData(taskData.filter((task) => {
            return task !== value
        }))
    }

    return (
        <Box>
            <Heading/>
            <CreateTask handleTask={createTask}/>
            <TaskList taskData={taskData} updateTaskData={deleteTask}/>
        </Box>
    )   
}

export default App;