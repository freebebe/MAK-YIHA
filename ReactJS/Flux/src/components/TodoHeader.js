import {Components, useState} from 'react';
import {TodoActions} from '../actions/todoActions.js';

export default function TodoHeader () {
  this.onChange = this.onChange.bind(this)
  const [text, setText] = useState('');
  const [editing, setEditing] = useState(false)

  return (
    <div>
      <h1>test title</h1>
      <div>
        <input
          value={text}
          type="text" 
          placeholder="your choose"
          onChange={ (e) => setEditing(e.target.value)}
         />
      </div>
      <button onClick={TodoActions.addTodo}>send</button>
    </div>
  )
}
