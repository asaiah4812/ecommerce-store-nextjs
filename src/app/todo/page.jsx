"use client"
import React from 'react'
import { useState } from 'react'
import style from './page.module.css'

const Todo = () => {
    const [newtodo, setNewTodo] = useState([])
    const [newtask, setNewTask] = useState("")
    const totoListiner = (event) => {
        setNewTask(event.target.value)
    }
    const addTask = () => {
        setNewTodo([...newtodo, newtask])
    }
  return (
    <div className={style.app}>
        <div>
            <input type="text" onChange={totoListiner}/>
            <button onClick={addTask}>Add Task</button>
        </div>
            <div className={style.newTask}>
                {newtodo.map((todo, value) => {
                    return<h1 key={value}>{todo}</h1>
                })}
            </div>
    </div>
  )
}

export default Todo