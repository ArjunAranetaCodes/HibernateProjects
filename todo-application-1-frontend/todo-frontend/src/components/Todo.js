// Todo.js
import React from 'react';

const Todo = ({ todo, onDelete }) => {
    return (
        <div className="mb-3">
            <span>{todo.title}</span>
            <button className="btn btn-danger btn-sm ms-2" onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </div>
    );
};

export default Todo;
