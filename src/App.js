import React, { useState } from 'react';
import './App.css';

export const App = () => {
  const [value, setValue] = useState('')
  const [lists, setLists] = useState([])
  const onChange = (e) => {
    setValue(e.currentTarget.value)
  }
  const onSubmit = (e) => {
    if (e.keyCode === 13) {
      const newLists = lists.concat({ value: value, isCompleted: false })
      setLists(newLists)
      setValue('')
    }
  }
  const onComplete = (e, index) => {
    const newLists = lists.slice(0)
    const newList = { value: lists[index].value, isCompleted: !lists[index].isCompleted }
    newLists.splice(index, 1, newList)
    setLists(newLists)
  }
  const onDelete = (e, index) => {
    const newLists = lists.slice(0)
    newLists.splice(index, 1)
    setLists(newLists)
  }
  return (
    <div className="app">
      <p>Todo</p>
      <input type="text" value={value} onChange={(e) => onChange(e)} onKeyUp={(e) => onSubmit(e)} />
      <ul>
        { lists.map((list, index) => {
          return (
            <li key={index}>
              <span className={list.isCompleted ? 'isCompleted': ''}>{list.value}</span>
              <button onClick={(e) => {onComplete(e, index)}}>√</button>
              <button onClick={(e) => {onDelete(e, index)}}>x</button>
            </li>
          ) 
        })}
      </ul>
    </div>
  )
}
