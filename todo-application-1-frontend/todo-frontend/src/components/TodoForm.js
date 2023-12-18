import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/todos', { title, description }) // Replace with your backend endpoint
      .then(response => {
        console.log('Todo added successfully:', response.data);
        // Add logic to update state or fetch todos again
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
                <input type="text" class="form-control"  value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" class="form-control"  value={description} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-success">Add Todo</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default TodoForm;
