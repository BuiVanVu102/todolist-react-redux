import { ITodoItem } from '../../modules/models'
import { TodosActionTypes } from '../../constants'

//init interface
export interface ILoadTodosAction {
  type: TodosActionTypes.LOAD_TODOS
}

export interface ILoadedTodosAction {
  type: TodosActionTypes.LOADED_TODO_LIST
  payload: {}
}
export interface IAddedTodoAction {
  type: TodosActionTypes.ADDED_TODO
  payload: any
}

export interface ICheckTodoAction {
  type: TodosActionTypes.CHECK_TODO
  payload: any
}

export interface IDeleteTodoAction {
  type: TodosActionTypes.DELETE_TODO
  payload: any
}

export interface IEditTodoAction {
  type: TodosActionTypes.EDIT_TODO
  payload: any
}
//action creator
//action creator Load(EPIC)
export function loadTodos(): ILoadTodosAction {
  return {
    type: TodosActionTypes.LOAD_TODOS,
  }
}
//action creator Loaded(EPIC)
export function loadedTodos(todoList: ITodoItem[]): ILoadedTodosAction {
  return {
    type: TodosActionTypes.LOADED_TODO_LIST,
    payload: {
      todoList,
    },
  }
}
//action add
export function addedTodo(data: ITodoItem): IAddedTodoAction {
  return {
    type: TodosActionTypes.ADDED_TODO,
    payload: data,
  }
}
//action check
export function checkedTodo(data: any): ICheckTodoAction {
  return {
    type: TodosActionTypes.CHECK_TODO,
    payload: data,
  }
}

//action delete
export function deletedTodo(data: any): IDeleteTodoAction {
  return {
    type: TodosActionTypes.DELETE_TODO,
    payload: data,
  }
}

//action edit
export function editedTodo(data: any): IEditTodoAction {
  return {
    type: TodosActionTypes.EDIT_TODO,
    payload: data,
  }
}

//type TodosAction
export type TodosAction =
  | ILoadedTodosAction
  | ILoadTodosAction
  | IAddedTodoAction
  | ICheckTodoAction
  | IDeleteTodoAction
  | IEditTodoAction
