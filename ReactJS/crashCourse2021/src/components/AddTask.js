const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label for="">Task</label>
        <input type="text" placeholder='Add Task' />
      </div>
      <div className="form-control">
        <label for="">day N time</label>
        <input type="text" placeholder='Add Task' />
      </div>
      <div className="form-control">
        <label for="">reminder</label>
        <input type="checkbox" />
      </div>
    </form>
  )
}
