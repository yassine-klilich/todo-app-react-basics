import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAdd }) {

  const [taskTitle, setTaskTitle] = useState("")

	function onSubmit(event) {
		event.preventDefault()
		onAdd({
			title: taskTitle,
			completed: false
		})
	}

	return (
		<form onSubmit={onSubmit} style={formStyle}>
			<label>Title</label>
			<input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}/>
			<input type="submit" value="Add task" />
		</form>
	)
}

const formStyle = {
	display: "grid",
  rowGap: "6px",
}

TaskForm.propTypes = {};

TaskForm.defaultProps = {};

export default TaskForm;
