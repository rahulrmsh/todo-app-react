import React, { useState } from 'react'

export default function Forms (props) {
  const [name, setName] = useState('')
  function handleSubmit (e) {
    e.preventDefault()
    if (name !== '') {
      props.addTask(name)
    }
    setName('')
  }
  function handleChange (e) {
    setName(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='new-todo-input'
        className='input input__lg'
        name='text'
        autoComplete='off'
        value={name}
        onChange={handleChange}
      />
      <button type='submit' className='btn btn__primary btn__lg'>
          Add
      </button>
    </form>
  )
}
