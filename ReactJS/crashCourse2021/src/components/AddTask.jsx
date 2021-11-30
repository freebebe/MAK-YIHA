import { useState } from 'react';

const AddTask = ( onAdd ) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit=(e)=>{
    e.preventDefault()

    if(!text) {
      alert('pleas add a task')
      return
    }

    onAdd({text, day, reminder})

    text('')
    day('')
    reminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label for="">Task</label>
        <input 
          type="text" 
          placeholder='Add Task'
          value={text} 
          onChange={(e)=>setText(e.target.value)}
          />
      </div>
      <div className="form-control">
        <label for="">day N time</label>
        <input 
          type="text"
          placeholder='Add Task'
          value={day}
          onChange={(e)=>setDay(e.target.value)}
          />
      </div>
      <div className="form-control">
        <label for="">reminder</label>
        <input type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e)=>setReminder(e.currentTarget.checked)}
          />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask
