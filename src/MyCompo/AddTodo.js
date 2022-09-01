import React, { useState } from 'react';
import { Todos } from './Todos';

export const AddTodo = () => {
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

        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        setTodos([...todos, myTodo]);
        console.log(myTodo);

    }
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Titile can not changed")
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3> Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo desc</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm  btn-success">Submit</button>
            </form>

            <Todos todos={todos} onDelete={onDelete} />
        </div>
    )
}
