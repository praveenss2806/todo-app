import { useState } from "react"

const CreateTask = ({handleTask}) => {
    const [task, setTask] = useState('')

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleClick = () => {
        handleTask(task)
        setTask('')
    }


    return (
        <div className="create-div">
            <input className="input" type="text" placeholder="What is the task today?" value={task} onChange={handleChange} />
            <button className="btn" onClick= {handleClick}>Add Task</button>
        </div>
    )
}

export default CreateTask;