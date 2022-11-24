import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => {
          console.log(e.target.value);
          setTodo(e.target.value);
        }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          console.log()
          setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
          // console.log(result);
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          // console.log(value);
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  console.log(e.target.checked)
                  console.log(obj)
                  setTodos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2;
                  }))
                }} value={obj.text} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          )
        })

        }

        <h1>Active tasks</h1>
        {toDos.map((task) => {
          if (task.status) {
            return <h1>{task.text}</h1>
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;