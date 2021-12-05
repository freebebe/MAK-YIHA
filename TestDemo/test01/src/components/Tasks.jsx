import Task from './Task'

const Tasks = ({ tasksList, onDel, onToggle }) => {
  return(
    <>
      {tasksList.map(( taskView ) =>
        <Task
          key={taskView.id}
          taskView={taskView}
          onToggle={onToggle}
          onDel={onDel}
        />
      )}
    </>
  )
}

export default Tasks
