import { TodosAction } from './../actions/todoAction'
import { TodosActionTypes } from './../../constants/todoActionsTypes'
import { ITodoItem } from './../../modules/models'

export interface ITodoState {
  todoList: ITodoItem[]
}
export const initialTodoState: ITodoState = {
  todoList: [],
}

export default function todosReducer(state: ITodoState = initialTodoState, action: TodosAction) {
  // console.log(state)
  switch (action.type) {
    case TodosActionTypes.LOADED_TODO_LIST:
      return action.payload

    case TodosActionTypes.ADDED_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      }
    case TodosActionTypes.CHECK_TODO:
      const { todo, idx } = action.payload
      const list = [...state.todoList]
      list[idx] = {
        ...list[idx],
        completed: list[idx].completed === false ? true : false,
      }
      return {
        ...state,
        todoList: list,
      }
    case TodosActionTypes.DELETE_TODO:
      const newList = [...state.todoList]
      const newListTodo = newList.filter((todo: any) => todo.id !== action.payload)
      return {
        ...state,
        todoList: newListTodo,
      }
    case TodosActionTypes.EDIT_TODO:
      return {
        ...state,
        todoList: action.payload,
      }

    default:
      return state
  }
}
