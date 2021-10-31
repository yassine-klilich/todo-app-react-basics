import { createRef, useState } from 'react';
import './App.css';
import TaskHeader from './components/TaskHeader/TaskHeader';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';

let data = [
	{id: 1, title: "Task 1", completed: true},
	{id: 2, title: "Task 2", completed: true},
	{id: 3, title: "Task 3", completed: false},
]

function App() {
	const [tasks, setTasks] = useState(data)
	const [showTaskForm, setShowTaskForm] = useState(false)
	let textInput = createRef();

	function onSearch() {
		const value = textInput.current.value.toLowerCase()
		if(value === null || value === undefined || value.trim() === "") {
			setTasks(data)
		}
		else {
			setTasks(data.filter(item => item.title.toLowerCase().includes(value)))
		}
	}

	function onDelete(id) {
		setTasks(tasks.filter(item => item.id !== id))
	}

	function onAdd(newTask) {
		newTask.id = tasks.length + 1
		setTasks([...tasks, newTask])
	}

	function renderTaskForm() {
		if (showTaskForm === true) {
			return <TaskForm onAdd={onAdd} />
		}
		return
	}

	function toggleForm() {
		setShowTaskForm(!showTaskForm)
	}

	function onTitleChange(taskItem) {
		setTasks(tasks.map(item => {
			if(item.id === taskItem.id) {
				item.title = taskItem.title
				return item
			}
			return item
		}))
		
	}

	return (
		<div className='app-content-wrapper'>
			<TaskHeader ref={textInput} onSearch={onSearch} toggleForm={toggleForm} showTaskForm={showTaskForm} />
			{renderTaskForm()}
			<TaskList tasks={tasks} onDelete={onDelete} onTitleChange={onTitleChange} />
		</div>
	);
}

export default App;
