import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos}
        title={title} setTitle={setTitle}
        description={description} setDescription={setDescription}
        editMode={editMode} setEditMode={setEditMode}
        editTodoId={editTodoId} setEditTodoId={setEditTodoId}/>
      <TodoList todos={todos} setTodos={setTodos}
        title={title} setTitle={setTitle}
        description={description} setDescription={setDescription}
        editMode={editMode} setEditMode={setEditMode}
        editTodoId={editTodoId} setEditTodoId={setEditTodoId}/>
    </div>
  );
}

export default App;
