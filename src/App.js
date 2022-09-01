import './App.css';
import Header from './MyCompo/Header';
import { Todos } from './MyCompo/Todos';
import { TodoItem } from './MyCompo/TodoItem';
import { Footer } from './MyCompo/Footer';
import { AddTodo } from './MyCompo/AddTodo';
import { About } from './MyCompo/About';

import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header title="My Todos List" searchBar={false} />
      <Footer />
      <Routes>
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/Todos" element={<AddTodo />} />
      </Routes>

    </BrowserRouter>

  )




  // <>

  //   <Header title="My Todos List" searchBar={false} />
  //   <AddTodo addTodo={addTodo} />
  //   <Todos todos={todos} onDelete={onDelete} />
  //   <Footer/>
  // </>

}

export default App;


