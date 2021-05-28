import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import AskTask from './components/AskTask.js';
import Footer from './components/Footer.js';
import About from './components/About.js';


    const App = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [] )

    //Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }


    //Fetch Task 
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }


    //Show input
    const [inputShow,setShow] = useState({
        show : false
    })

    const showInput = (status) => {
        // console.log(status);
        setShow({show:!status})
    }

    //Delete tasks
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`,{method: 'DELETE'})

        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleRemind = async (id) => {
        // console.log(id);
        const taskFromServer = await fetchTask(id)
        const updateTask = {...taskFromServer,reminder: !taskFromServer.reminder}
        
        const res = await fetch(`http://localhost:5000/tasks/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(updateTask)
            }
        )

        const data = await res.json()

        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task ))
    }

    //Add Task 

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks',
        {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()

        setTasks([...tasks,data])
    }

    return (
        <Router>
            <div className="flex flex-col justify-center px-96 py-44">
                <section className="border w-full p-5">
                    <Header inputShow={inputShow} onShow={showInput} />
                    {inputShow.show === true ? <AskTask onAdd={addTask} /> : ''}
                    {/* <AskTask /> */}
                    <Route path='/' exact render={(props) => 
                        <>
                            {tasks.length > 0 ? <Tasks onToggle={toggleRemind} onDelete={deleteTask} tasks={tasks} /> : <h3 className="flex justify-center mt-4 text-gray-400">No records</h3>}
                        </>
                    } 
                    />
                    <Route  path='/about' component={About} />
                </section>
                
                <Footer />
            </div>
        </Router>
    )
}

export default App;
