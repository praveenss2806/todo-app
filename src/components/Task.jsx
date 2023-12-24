import DeleteIcon from '../images/delete-icon.png'

const Task = ({value}) => {
    return (<div className="task-div">
        <div className='val-div'>
            <p>{value}</p>
        </div>
        <div className='img-div'>
            <img className='img' src={DeleteIcon} alt="" />
        </div>
    </div>)
}

export default Task;