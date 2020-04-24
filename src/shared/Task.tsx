import React from 'react';
import './Task.scss'

interface TaskProp {
    id: number;
    title: string;
    description?: string;
}

const Task = ({id, title, description}: TaskProp) => {

    return (
        <div className="task-item">
            <div>Task: {id}</div>
            <div>Title: {title}</div>
            <div>Desc: {description}</div>
        </div>
    );
}

export default Task;