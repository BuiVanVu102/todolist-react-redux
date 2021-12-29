import React, { ReactElement, useState } from 'react'
import { FaCheckSquare } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addedTodo } from '../../../../app/actions'
import { v4 as uuidv4 } from 'uuid'
import './style.scss'
import { lastValueFrom } from 'rxjs'

interface Props {}

function TodoForm({}: Props): ReactElement {
  //init disPatch
  const disPatch = useDispatch()
  //init State
  type initState = Date | string | undefined
  const initTime: initState = new Date()
  const [text, setText] = useState('')
  const [time, setTime] = useState(initTime)
  //handle Text Change
  const handleTextOnChange = (e: any) => {
    e.preventDefault()

    const value = e.target.value
    setText(value)
  }
  //test uuidv4
  // console.log(uuidv4())

  //handle Date Change
  const handleDateChange = (e: any) => {
    console.log(e.target.value)
    e.preventDefault()
    const value = new Date(e.target.value)
    console.log(value)
    setTime(value)
  }

  // handleSubmit
  const handleSubmit = (e: any) => {
    e.preventDefault()
    text.trim()
      ? disPatch(
          addedTodo({
            userId: uuidv4(),
            id: uuidv4(),
            title: text,
            completed: false,
            date: time.toLocaleString().split(',')[0],
          })
        )
      : alert('not thing!!! Please enter again')
    setText('')
  }
  return (
    <div className="header">
      <div className="header__title">
        <FaCheckSquare
          className="header__title--icon"
          style={{ alignItems: 'center' }}
          size={'3em'}
          color={'#007bff'}
        />
        <u className="header__title--text">My Todo-s</u>
      </div>
      <div className="header__input">
        <input
          type="text"
          name="title"
          id=""
          value={text}
          className="header__input--text"
          placeholder="Add new"
          onChange={handleTextOnChange}
        />
        <input
          type="date"
          name=""
          id=""
          required
          pattern="\d{4}-\d{2}-\d{2}"
          className="header__input--date"
          onChange={handleDateChange}
        />
        <button type="submit" className="header__input--submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}

export default TodoForm
