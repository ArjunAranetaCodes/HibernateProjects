import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoForm = ({todos, setTodos, title, setTitle, description, setDescription, editMode, setEditMode, editTodoId, setEditTodoId}) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddOrUpdateTodo = (e) => {
    e.preventDefault();
    if (editMode) {
        console.log('editTodoId ' + editTodoId)
        // Update existing todo
        fetch(`http://localhost:8080/api/todos/${editTodoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                // Add any other properties you have for a todo
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Todo updated successfully:', data);
                // Fetch the updated list of todos and update the state
                fetch('http://localhost:8080/api/todos')
                    .then((response) => response.json())
                    .then((updatedTodos) => setTodos(updatedTodos))
                    .catch((error) =>
                        console.error('Error fetching updated todos:', error)
                    );
            })
            .catch((error) => console.error('Error updating todo:', error));
    } else {
        // Add new todo
        fetch('http://localhost:8080/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                // Add any other properties you have for a todo
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Todo added successfully:', data);
                // Fetch the updated list of todos and update the state
                fetch('http://localhost:8080/api/todos')
                    .then((response) => response.json())
                    .then((updatedTodos) => setTodos(updatedTodos))
                    .catch((error) =>
                        console.error('Error fetching updated todos:', error)
                    );
            })
            .catch((error) => console.error('Error adding todo:', error));
    }

    // Reset form state
    setNewTodo('');
    setEditMode(false);
    setEditTodoId(null);
};

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleAddOrUpdateTodo}>
            <div className="row mb-3">
                <input type="text" 
                    className="form-control"
                    placeholder='Todo Title'  
                    value={title  || ''} 
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="row mb-3">
                <input type="text" 
                    className="form-control"  
                    placeholder='Description'
                    value={description  || ''} 
                    onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='row mb-3'>
                <button className="btn btn-success" >
                    {editMode ? 'Update Todo' : 'Add Todo'}
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default TodoForm;
