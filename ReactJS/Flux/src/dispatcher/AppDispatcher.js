import {Dispatcher} from 'flux';

class DispatcherClass extends Dispatcher {
  handleAction(action) {
  this.dispatch({
    type: action.type,
    payload: action.payload
  })
  }
}

export default AppDispatcher = new DispatcherClass();
