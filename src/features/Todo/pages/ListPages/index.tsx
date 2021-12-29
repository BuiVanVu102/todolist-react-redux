import React, { ReactElement, useState } from 'react'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { filterSortChange, filterStatusChange } from '../../../../app/actions/filterAction'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'

import './style.scss'

interface Props {}

function ListPages({}: Props): ReactElement {
  //init dispatch
  const dispatch = useDispatch()

  //init state
  const [status, setStatus] = useState<string>('all')
  const [sort, setSort] = useState<string>('added')

  //handleStatusChange
  const handleStatusOnChange = (e: any) => {
    e.preventDefault()
    const value = e.target.value
    setStatus(value)
    dispatch(filterStatusChange(value))
  }
  //handleSortChange
  const handleSortOnChange = (e: any) => {
    e.preventDefault()
    const value = e.target.value
    setSort(value)
    dispatch(filterSortChange(value))
  }
  return (
    <div className="Container">
      <TodoForm></TodoForm>
      <hr />
      <div className="main">
        <div className="main__filter">
          <label htmlFor="" className="main__filter--lb">
            Filter
          </label>
          <select
            name=""
            id=""
            className="main__filter--sl"
            onChange={handleStatusOnChange}
            value={status}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
            <option value="dueDate">Has-due-date</option>
          </select>
        </div>
        <div className="main__sort">
          <label htmlFor="" className="main__sort--lb">
            Sort
          </label>
          <select
            name=""
            id=""
            className="main__sort--sl"
            value={sort}
            onChange={handleSortOnChange}
          >
            <option value="added">Added date</option>
            <option value="due">Due date</option>
          </select>
          <FaSortAmountDownAlt
            className="main__sort--icon"
            style={{}}
            size={'1em'}
            color={'#007bff'}
          />
        </div>
      </div>
      <TodoList></TodoList>
    </div>
  )
}

export default ListPages
