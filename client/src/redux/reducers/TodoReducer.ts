import { TodoActionTypes } from '../actions/types';
import { ADD_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from '../actions/todoActions';
import { TodoState } from './types';


const initialState: TodoState = {
  todos: [],
};


 const TodoReducer = (state:TodoState = initialState, action:TodoActionTypes) => {

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};

 export default TodoReducer;