import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onDelete, onTitleChange }) {

	return (
		<div className="task-item">
			<input type="checkbox" defaultChecked={task.completed} onChange={() => task.completed = !task.completed} />
			<input value={task.title} onChange={(e) => {
				task.title = e.target.value
				onTitleChange(task)
			}} />
			<button onClick={() => onDelete(task.id)}>Delete</button>
		</div>
	)
}

TaskItem.propTypes = {};

TaskItem.defaultProps = {};

export default TaskItem;
