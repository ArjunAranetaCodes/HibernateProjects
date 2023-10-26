import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {

  useEffect(() => {
    axios.get('http://localhost:8080/api/todos') // Replace with your backend endpoint
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const handleDelete = (id) => {
    // Send delete request to the API
    fetch(`http://localhost:8080/api/todos/${id}`, {
        method: 'DELETE',
    })
        .then((response) =>
        {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
        })
        .then((data) => {
          console.log(data);
          setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));   
        })
        .catch((error) => console.error('Error deleting todo:', error));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {todos.map(todo => (
              <Todo key={todo.id} todo={todo} onDelete={handleDelete} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
