import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/todos') // Replace with your backend endpoint
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul class="list-group">
            {todos.map(todo => (
              <li class="list-group-item" key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
