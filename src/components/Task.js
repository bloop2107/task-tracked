import { FaTimes } from 'react-icons/fa'


const Task = ({ task,onDelete,onToggle }) => {
    let status = (task.reminder) ? 'border-green-500' : '';
    return (
        <div className={"cursor-pointer bg-gray-200 mb-2 mt-2 p-4 px-8 rounded border-l-4 " + status} onDoubleClick={() => onToggle(task.id)} >
            <h3 className="flex justify-between items-center">
                {task.text} 
                <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
