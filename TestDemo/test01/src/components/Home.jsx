import {useState} from 'react'
import Header from './Header'
import Tasks from './Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
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

  return(
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
