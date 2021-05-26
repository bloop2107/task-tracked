import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import Input from './components/Input.js';

import { useState } from 'react'
import AskTask from './components/AskTask.js';


    const App = () => {
      const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Learn Python',
                day: 'Feb 5th at 2:30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'Learn Javascript',
                day: 'Feb 6th at 2:30pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'Learn Reacjs',
                day: 'Feb 7th at 2:30pm',
                reminder: false,
            },
            {
                id: 4,
                text: 'Learn PHP',
                day: 'Feb 8th at 2:30pm',
                reminder: true,
            }
        ]
    )

    //Show input
    const [inputShow,setShow] = useState({
        show : false
    })

    const showInput = (status) => {
        // console.log(status);
        setShow({show:!status})
    }

    //Delete tasks
    const deleteTask = (id) => {
        // console.log('delete',id);
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleRemind = (id) => {
        // console.log(id);
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
    }


    return (
      <div className="flex justify-center px-96 py-44">
          <section className="border w-full p-5">
            <Header inputShow={inputShow} onShow={showInput} />
            {inputShow.show === true ? <AskTask /> : ''}
            {/* <AskTask /> */}
            {tasks.length > 0 ? <Tasks onToggle={toggleRemind} onDelete={deleteTask} tasks={tasks} /> : "No records"}
          </section>
      </div>
    )
}

export default App;
