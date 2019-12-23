import React, { useContext, useState } from 'react'
import TaskItem from './TaskItem'
import { TodoContext } from '../App'
import uuidv4 from 'uuid/v4'


export default function TaskList({ todo }) {
	const {
		listName,
		tasks
	} = todo

	const [taskName, setTaskName] = useState("")
	const { handleTodoChange } = useContext(TodoContext)
	const numberOfTasksLeft = tasks && tasks.filter(task => task.isCompleted === false).length
	const tasksLeft = numberOfTasksLeft > 1 ? 'tasks' :
		numberOfTasksLeft === 1 ? 'task' : '0 task'

	function handleChange(changes) {
		handleTodoChange(todo.id, { ...todo, ...changes })
	}

	function handleTaskInput(e) {
		const { value } = e.target
		setTaskName(value)
	}

	function handleTaskSubmit(e) {
		e.preventDefault()
		if (taskName === null || taskName === '') return
		const newTask = {
			id: uuidv4(),
			taskName: taskName,
			isCompleted: false
		}

		handleChange({ tasks: [...todo.tasks, newTask] })
		setTaskName("")
	}

	// handleTaskChange會幫我們更新task的內容
	function handleTaskChange(id, task) {
		const newTasks = [...tasks]
		const index = newTasks.findIndex(task => task.id === id)
		newTasks[index] = task
		handleChange({ tasks: newTasks })
	}

	function handleTaskDelete(id) {
		handleChange({
			tasks: tasks.filter(task => task.id !== id)
		})
	}

	function handleFilter(e) {
		e.preventDefault()
		const { target } = e
		if (!tasks) return
		if (!target.matches('a')) return
		let filter
		if (target.innerText === 'All') {
			filter = null
			
			console.log('all')
			return
		}
		
		if (target.innerText === 'Active') {
			filter = tasks.filter(task => task.isCompleted === false)
			console.log('active')
		}

		if (target.innerText === 'Completed') {
			filter =  tasks.filter(task => task.isCompleted === true)
			console.log('completed')
		}

		handleChange({
			tasks:filter
		})
	}

	return (
		<div className="task">
			<div className="task-header">
				<div className="task-title">{listName}</div>
			</div>
			<div className="task-body">
				<form
					className="task-form"
					action="/"
					onSubmit={(e) => handleTaskSubmit(e)}
				>
					<input
						type="text"
						placeholder="What needs to be done today?"
						onChange={(e) => handleTaskInput(e)}
						value={taskName}
					/>
					<button type="submit" className="btn btn-submit">+</button>
				</form>
				<ul className="all-tasks">
					{/* 當我們有tasks時，才執行後面的mapping(原因是在未選擇的情況下，我們的selectedList是空物件) */}
					{tasks && tasks.map(task => <TaskItem
						key={task.id}
						task={task}
						handleTaskChange={handleTaskChange}
						handleTaskDelete={handleTaskDelete}
					/>)}
				</ul>
				<div className="task-footer">
					<span className="task-count">{numberOfTasksLeft} {tasksLeft} left</span>
					<ul className="task-filter" >
						<li>
							<a href="/" onClick={e => handleFilter(e)}>All</a>
						</li>
						<li>
							<a href="/">Active</a>
						</li>
						<li>
							<a href="/">Completed</a>
						</li>
					</ul>
					<button className="btn btn-delete-task">Clear Completed</button>
				</div>
			</div>
		</div>
	)
}
