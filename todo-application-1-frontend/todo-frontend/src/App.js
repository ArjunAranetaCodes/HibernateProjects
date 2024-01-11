import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos}
        title={title} setTitle={setTitle}
        description={description} setDescription={setDescription}/>
      <TodoList todos={todos} setTodos={setTodos}
        title={title} setTitle={setTitle}
        description={description} setDescription={setDescription}/>
    </div>
  );
}

export default App;
