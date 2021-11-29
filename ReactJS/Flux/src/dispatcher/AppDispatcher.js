import {useState} from 'react'
import {Dispatcher} from 'flux';

const DispatcherClass = () => {
  const [type, setType] = useState('action.type')
  const [payload, setPayload] = useState('')
  return(
    <div>
      
    </div>
  )
}

class DispatcherClass extends Dispatcher {
  handleAction(action) {
  this.dispatch({
    type: action.type,
    payload: action.payload
  })
  }
}

export default AppDispatcher = new DispatcherClass();
