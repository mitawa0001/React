import './App.css';
import Header from './MyCompo/Header';
import { Todos } from './MyCompo/Todos';
import { TodoItem } from './MyCompo/TodoItem';
import { Footer } from './MyCompo/Footer';
import { AddTodo } from './MyCompo/AddTodo';
import { About } from './MyCompo/About';

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const onDelete = (todo) => {
    console.log("i am working and delete....", todo)



    setTodos(todos.filter((e) => {

      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;

    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    // let sno = todos [todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState([])
  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Route>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;


