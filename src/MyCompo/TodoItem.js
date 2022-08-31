import React from 'react'

export const TodoItem = ({todo, onDelete }) => {
  return (
    <div>
      {/* <h3> List is here</h3> */}
      <p className='my-5'>{todo.sno}</p>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger'onClick={() => onDelete(todo)}>Remove</button>
    </div>
  )
}
