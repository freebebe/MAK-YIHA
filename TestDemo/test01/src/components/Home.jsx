import { useState, useEffect } from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTasks from './AddTasks'

const App = () => {
  const [showAddTasks, putAddTasks] = useState(false)
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

  // useEffect(()=> {
  //   const getTaskList = () => {
  //     const taskInSever = fetchTaskList()
  //     setTasksList(taskInSever)
  //   }
  //   getTaskList()
  // }, [])

  // const addTaskList = () => {
  //   const id = Math.floor(Math.random()*10000) + 1
  //   const newTaskList = (id, ...taskView)
  //   setTasksList(...tasksList, newTaskList)
  // }

  const toggleDel = (id) => {
    setTasksList(tasksList.filter((taskList)=> taskList.id !== id))
  }

  const toggleRem = () => {
  }


  return(
    <div className="container">
      <Header onAdd={()=>putAddTasks(!showAddTasks)}
      showAdd={showAddTasks}
      />
      <Tasks
        tasksList={tasksList}
        onToggle={toggleRem}
        onDel={toggleDel}
      />
    </div>
  )
}

export default App
