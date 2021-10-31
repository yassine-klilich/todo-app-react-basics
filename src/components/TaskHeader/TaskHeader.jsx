import React, { forwardRef } from 'react'
import './TaskHeader.css';


const TaskHeader = forwardRef(({ onSearch, toggleForm, showTaskForm }, ref) => {
	return (
		<div className='task-header'>
			<input ref={ref} type="text" placeholder="Search" onInput={onSearch} />
			<button onClick={toggleForm}>{(showTaskForm) ? "Close" : "Add"}</button>
		</div>
	)
})

export default TaskHeader;
