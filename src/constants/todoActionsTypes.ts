export enum TodosActionTypes {
  //call API Todo
  LOAD_TODOS = 'todos/load',
  // LOADING_TODOs = 'todos/loading',
  LOADED_TODO_LIST = 'todo/loaded',
  // LOADING_TODOS_FAILED = 'todos/loading_failed',

  //handle add Todo
  // ADD_TODO = 'todos/add',
  // ADDING_TODO = 'todos/adding',
  ADDED_TODO = 'todo/added',
  // ADDING_TODOS_FAILED = 'todos/adding_failed',

  //handle Check Action
  CHECK_TODO = 'todo/checked',
  //handle Delete Action
  DELETE_TODO = 'todo/delete',
  //handle Edit Action
  EDIT_TODO = 'todo/edit',
}
