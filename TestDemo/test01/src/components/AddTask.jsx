import {useState} from 'react'

const AddTasks = ({onAdd}) => {
  const [text, addText] = useState('')
  const [day, addDay] = useState('')
  const [reminder, turnReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
      alert('emtry check msg please')
      return
    }

    onAdd({text, day, reminder})

    addText('')
    addDay('')
    turnReminder(false)
  }

  return(
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">
          Test
        </label>
        <input
          type="text"
          placeholder="Add Text"
          value={text}
          onChange={(e)=> addText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">
          Day
        </label>
        <input 
          type="text" 
          placeholder="Add Day" 
          value={day}
          onChange={(e)=> addDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Add reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e)=> turnReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save msg" className="btn btn-block" />
    </form>
  )
}

export default AddTasks
