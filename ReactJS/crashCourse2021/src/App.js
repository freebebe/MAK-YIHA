import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  const [showAddTask, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=> {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const addTask = async () => {
    const res = await fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: {
        'Contents-type': 'application/json',
      },
      body: JSON.stringify(task),
    }),

    const data = await res.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random()*10000) + 1
    // const newTask = {id, ...task}
    // setTasks(...tasks, newTask)
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTasks(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Contents-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder:
            !data.reminder
        } : task
      )
    )
  }

  return (
    <Router>
    <div class="container">
      <Header onAdd={() => showAddTask(!showAddTask)} showAdd={showAddTask} />
    <Footer />
    <Route path='/' exact render={(props)=>{
      <>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onToggle={toggleReminder}
          onDel={deleteTask} />
      ) : (
        'no tasks'
      )}
      </>
    }} />
    <Route path='/about' component={About} />
    </div>

    </Router>
  );
};

export default App;
