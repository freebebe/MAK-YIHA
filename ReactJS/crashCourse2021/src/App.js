import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: '111111111 1',
        day: 'feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: '22222222222',
        day: 'feb 6th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: '33333333333',
        day: 'feb 5th at 2:30pm',
        reminder: false,
      },
    ]
  )

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder:
            !task.reminder
        } : task
      )
    )
  }

  return (
    <div class="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onToggle={toggleReminder}
          onDel={deleteTask} />
      ) : (
        'no tasks'
      )}
    </div>
  );
};

export default App;
