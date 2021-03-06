import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Todo from './components/Todo'
import Form from './components/Form'
// import FilterButton from './components/FilterButton'
// import './App.css'

function App (props) {
  const [tasks, setTasks] = useState(props.tasks)
  function toggleTaskCompleted (id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function deleteTask (id) {
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }

  const taskList = tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  )
  )
  function addTask (name) {
    const newTask = { id: `todo-${nanoid()}`, name: name, completed: false }
    setTasks([...tasks, newTask])
  }
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task'
  const headingText = `${taskList.length} ${tasksNoun} remaining`
  return (
    <div className='todoapp stack-large'>
      <h1>To-Do</h1>
      <h2 className='label-wrapper'>
        <label htmlFor='new-todo-input' className='label__lg'>
            What are you upto today?
        </label>
      </h2>
      <Form addTask={addTask} />
      {/* <div className='filters btn-group stack-exception'>
        <FilterButton title='All' />
        <FilterButton title='Active' />
        <FilterButton title='Completed' />
      </div> */}
      <h2 id='list-heading'>{headingText}</h2>
      <hr />
      <ul
        role='list'
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {taskList}
      </ul>
    </div>
  )
}

export default App
