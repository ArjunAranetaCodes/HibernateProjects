import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoForm = ({todos, setTodos}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/todos', { title, description }) // Replace with your backend endpoint
      .then(response => {
        console.log('Todo added successfully:', response.data);

        fetch('http://localhost:8080/api/todos')
            .then((response) => response.json())
            .then((updatedTodos) => setTodos(updatedTodos))
            .catch((error) => console.error('Error fetching updated todos:', error));
      })
      .catch(error => console.error('Error adding todo:', error));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Todo Title</label>
                <input type="text" className="form-control"  value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control"  value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success" >Add Todo</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default TodoForm;
