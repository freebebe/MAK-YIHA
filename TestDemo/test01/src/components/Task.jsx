const Task = ({ taskView, onDel, onToggle}) => {
  return(
    <div 
      className={`task ${taskView.reminder ? 'reminder' : ''}`}
      onDoubleClick={()=> onToggle(taskView.id)}
    >
      <h3>
        {taskView.text}
        <div className="task-button-onDel" 
             onClick={()=> onDel(taskView.id)}
        >
          Del
        </div>
      </h3>
      <p>{taskView.day}</p>
    </div>
  )
}

export default Task
