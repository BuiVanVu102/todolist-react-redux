import React from 'react'
import { createSelector } from 'reselect'

export const todoListState = (state: any) => state.todoList.todoList
export const filterStatus = (state: any) => state.filter.filter.status
export const filterSort = (state: any) => state.filter.filter.sort
//root

export const rootSelector = createSelector(
  todoListState,
  filterStatus,
  filterSort,
  (todoList: any, filter: any, sort: any) => {
    return todoList.filter((todo: any) => {
      if (filter === 'all') return todoList
      if (sort === 'added') {
        return todoList.sort()
      }
      return filter !== 'completed' && filter === 'active' ? !todo.completed : todo.completed
    })
  }
)
