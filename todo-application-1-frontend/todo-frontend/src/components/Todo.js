// Todo.js
import React from 'react';
import { Trash, Pencil } from 'react-bootstrap-icons';

const Todo = ({ todo, onEdit, onDelete }) => {
    return (
        <div className="card text-dark bg-light mb-3">
            <div className='row'>
                <div className='col-8'>
                    <div className="card-body">
                        <h5 className="card-title">{todo.title}</h5>
                        <p className="card-text">{todo.description}</p>
                    </div>
                </div>
                <div className='col-2'>
                    <button className="btn btn-primary btn-sm ms-2" onClick={() => onEdit(todo.id)}>
                        <Pencil/>
                    </button>
                    <button className="btn btn-danger btn-sm ms-2" onClick={() => onDelete(todo.id)}>
                        <Trash/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
