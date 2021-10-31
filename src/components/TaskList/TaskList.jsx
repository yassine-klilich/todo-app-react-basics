import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';


function TaskList({ tasks, onDelete, onTitleChange }) {
	function renderListTasks() {
		if(tasks.length === 0) {
			return (<div>No search result</div>)
		}
		else {
			return tasks.map(task => <TaskItem key={task.id} task={task} onDelete={onDelete} onTitleChange={onTitleChange} />)
		}
	}

	return (
		<div className='task-list'>
			{renderListTasks()}
		</div>
	)
}

TaskList.propTypes = {
	tasks: PropTypes.array
};

TaskList.defaultProps = {
	tasks: []
};

export default TaskList;
