import { useState } from 'react'


const AskTask = () => {
    
    const [text,setText] = useState('');
    const [day,setDate] = useState('');
    const [reminder,setReminder] = useState(false);

    
    return (
        <form className="w-full mt-4">
            <label htmlFor="task">Task</label>
            <div className="flex items-center border-b border-teal-500 py-2 mb-3">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Add Task" aria-label="Full name" id="task" onChange={(e) => setText(e.target.value)} />
            </div>
            <label htmlFor="datetime" className="mt-4">Date & Time</label>
            <div className="flex items-center border-b border-teal-500 py-2 mb-3">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Date time" aria-label="Full name" id="datetime" onChange={(e) => setDate(e.target.value)} />
            </div>
            <label htmlFor="reminder" className="mt-4">Set Reminder</label>
            <div className="flex items-center border-b border-teal-500 py-2">
                <input id="reminder" className="mr-2 leading-tight" type="checkbox" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <button className="w-full mt-4 mb-4 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Save Task
            </button>
        </form>
    )
}

export default AskTask
