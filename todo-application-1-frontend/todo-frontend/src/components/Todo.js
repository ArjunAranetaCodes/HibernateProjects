// Todo.js
import React from 'react';

const Todo = ({ todo, onEdit, onDelete }) => {
    return (
        <div className="card text-dark bg-light mb-3">
            <div className='row'>
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.description}</p>
                </div>
                <button className="btn btn-primary btn-sm ms-2" onClick={() => onEdit(todo.id)}>
                    Edit
                </button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => onDelete(todo.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todo;
