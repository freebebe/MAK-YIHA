import Appdispatcher from '../dispatcher/AppDispatcher.js'
import {ADD_TODO} from '../constants/actionTypes.js'

export const TodoActions = {
  addTodo(text) {
    AppDispatcher.handleAction({
    type: ADD_TODO,
      payload: {
        text,
      },
    })
  }
  
}
