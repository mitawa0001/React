import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (

    <div className=" container d-flex flex-column bd-highlight mb-3">
      {/* <h2 className="text-center my-5 h1"> Heading</h2> */}

      {props.todos.length === 0 ? "no found here" :

        props.todos.map((todo) => (
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        ))}



    </div>

  )
}
