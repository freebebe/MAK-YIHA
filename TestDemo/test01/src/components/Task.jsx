const Task = ({ taskView, onDel, onToggle }) => {
  return(
    <div className='' onDoubleClick={()=>onToggle(taskView.id)}>
      <h3 onClick={()=> onDel(taskView.id)}>
        {taskView.text}
      </h3>
      <p>{taskView.day}</p>
    </div>
  )
}

export default Task
