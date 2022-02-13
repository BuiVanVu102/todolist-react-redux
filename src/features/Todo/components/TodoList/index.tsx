import React, { useEffect, useState } from 'react'
import { FaInfoCircle, FaPencilAlt, FaSave, FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { checkedTodo, deletedTodo, editedTodo, loadTodos } from '../../../../app/actions'
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'
import { FiCheckSquare } from 'react-icons/fi'
import { GiCancel, GiSandsOfTime } from 'react-icons/gi'
import './style.scss'
import classNames from 'classnames'
import { rootSelector, todoListState } from '../../../../app/selector/allSelector'
interface Props {}

const TodoList = (props: Props) => {
  //Dispatch action loadTodos
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  //get State form Store equal useSelector
  const todoList = useSelector(rootSelector)
  //init state isEditing
  const [isEditing, setIsEditing] = useState(false)
  //init state editTodos
  interface initEdit {
    userId?: number | string
    id?: number | string
    title?: string
    completed?: boolean
    date?: Date | string
  }
  const [editTodo, setEditTodo] = useState<initEdit>({})

  //init variable Time
  const times = new Date()
  //handleTodoClick
  const handleTodoClick = (todo: any, idx: any) => {
    dispatch(checkedTodo({ todo, idx }))
  }
  //handleDeleteTodo
  const handleDelete = (id: number | string) => {
    dispatch(deletedTodo(id))
  }
  //handleEditTodo
  const handleEditClick = (todo: {}) => {
    setIsEditing(true)
    setEditTodo({ ...todo })
  }
  //handle onEditInputChange
  const onEditInputChange = (e: any) => {
    e.preventDefault()
    const value = e.target.value
    setEditTodo({ ...editTodo, title: value })
  }
  //handle Save
  const handleSave = (e: any) => {
    e.preventDefault()
    const updateTodo = todoList.map((td: any) => {
      return td.id === editTodo.id ? editTodo : td
    })
    setIsEditing(false)
    dispatch(editedTodo(updateTodo))
  }
  return (
    <>
      <div className="list">
        {todoList.map((todo: any, idx: any) => (
          <div className="list__todo" key={todo.id}>
            <div className="list__todo--head">
              <div onClick={() => handleTodoClick(todo, idx)} className="list__todo--head---icon">
                {todo.completed === true ? (
                  <FiCheckSquare style={{}} size={'2em'} color={'#007bff'} />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank style={{}} size={'2em'} color={'#007bff'} />
                )}
              </div>
              {isEditing && todo.id === editTodo.id ? (
                <input
                  type="text"
                  value={editTodo.title}
                  onChange={onEditInputChange}
                  className={classNames({
                    'list__todo--head---text': true,
                    completed: todo.completed === true,
                  })}
                />
              ) : (
                <input
                  type="text"
                  value={todo.title}
                  disabled
                  className={classNames({
                    'list__todo--head---text': true,
                    completed: todo.completed === true,
                  })}
                />
              )}
            </div>
            <div className="list__todo--due">
              {todo.date === times.toLocaleString().split(',')[0] ? (
                <GiSandsOfTime
                  style={{ padding: '9px', border: '1px solid #ffc107' }}
                  size={'2em'}
                  color={'#ffc107'}
                />
              ) : undefined}
            </div>
            <div className="list__todo--action">
              <div className="list__todo--action---icon">
                {isEditing && editTodo.id === todo.id ? (
                  <FaSave style={{}} size={'.8em'} color={'#007bff'} onClick={handleSave} />
                ) : (
                  <FaPencilAlt
                    style={{}}
                    size={'.8em'}
                    color={'#007bff'}
                    onClick={() => handleEditClick(todo)}
                  />
                )}
                {isEditing && editTodo.id === todo.id ? (
                  <GiCancel style={{}} size={'.8em'} color={'#dc3545'} />
                ) : (
                  <FaTrashAlt
                    style={{}}
                    size={'.8em'}
                    color={'#dc3545'}
                    onClick={() => handleDelete(todo.id)}
                  />
                )}
              </div>
              <div className="list__todo--action---time">
                <FaInfoCircle style={{}} size={'.6em'} color={'#6c757d'} />
                <label htmlFor="" className="list__todo--action---time-lb">
                  {todo.date}
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TodoList
