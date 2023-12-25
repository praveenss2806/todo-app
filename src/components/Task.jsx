import DeleteIcon from '../images/delete-icon.png'

const Task = ({value, delteTask}) => {
    const handleDelete = () => {
        delteTask(value)
    }

    return (<div className="task-div">
        <div className='val-div'>
            <p>{value}</p>
        </div>
        <div className='img-div'>
            <img className='img' onClick={handleDelete} src={DeleteIcon} alt="" />
        </div>
    </div>)
}

export default Task;