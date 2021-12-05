import {useState} from 'react'

const AddTasks = (onAdd) => {
                // ??? = props
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder ] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text) {
      alert('add task')
      return
    }
    onAdd({text, day, reminder})

    text('')
    day('')
    reminder(false)
  }

  return(
    <from className="form-control" onSubmit={onSubmit}>
    <label htmlFor="">test text</label>
    <div className="form-control">
      <input
        type="text"
        placeholder="Add text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
    </div>
    <div className="from-control">
      <input
        type="day"
        placeholder="Add day"
        value={day}
        onChange={(e)=>setDay(e.target.value)}
      />
    </div>
    <div className="form-control">
      <input 
        type="reminder"
        value={reminder}
        checked={reminder}
        onChange={(e)=>{setReminder(e.currentTarget.checked)}}
      />
    </div>
    <input type="submit" value="save tasks" className="btn btn-block" />
    </from>
  )
}

export default AddTasks
