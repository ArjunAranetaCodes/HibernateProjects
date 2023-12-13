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
    <form onSubmit={handleSubmit}>
      <label>
        Todo Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br/>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
