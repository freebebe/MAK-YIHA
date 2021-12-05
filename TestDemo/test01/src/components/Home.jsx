import { useState, useEffect } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasksList, setTasksList] = useState([
    {
      id: 1,
      text: 11111,
      day: 'Feb 5th at 5:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 22222,
      day: 'Feb 7th at 3:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 33333,
      day: 'Feb 5th at 5:30pm',
      reminder: false
    }
  ])

  const toggleDel = (id) => {
    setTasksList(tasksList.filter((taskView)=>taskView.id !== id))
  }

  const toggleRem = (id) => {
    setTasksList(
      tasksList.map((taskView)=>
        taskView.id === id ?
        {...taskView, reminder: !taskView.reminder} :
        taskView
      )
    )
  }

  const addTask = (taskView) => {
    const getId = Math.floor(Math.random() * 10000) + 1
    const newTask = {getId, ...taskView}
    setTasksList(...tasksList, newTask)
  }

  return(
    <div className="container">
    <Header />
    <AddTask onAdd={addTask} />
      { tasksList.length > 0 ?
        ( <Tasks
            tasksList={tasksList}
            onDel={toggleDel}
            onToggle={toggleRem}
          /> ) : (
          <a href="" className='nomoreP'>
            no more 2 Show
            Come tomorrow Please
          </a>
        )
      }
    </div>
  )
}

export default App
