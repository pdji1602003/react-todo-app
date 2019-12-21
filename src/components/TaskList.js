import React, { useContext, useState } from 'react'
import TaskItem from './TaskItem'
import TaskFilterOption from './TaskFilterOption'
import { TodoContext } from '../App'
import uuidv4 from 'uuid/v4'

export default function TaskList({ todo }) {
	const {
		listName,
		tasks
	} = todo
	
	const [taskName, setTaskName] = useState("")
	const [newTasks, setNewTasks] = useState(tasks)
	

	const { handleTodoChange } = useContext(TodoContext)

	function handleTaskInput(e) {
		const {value} = e.target
		setTaskName(value)
	}

	function handleTaskSubmit(e) {
		e.preventDefault()
		if(taskName === null || taskName === '') return
		const newTask = {
			id:uuidv4(), 
			taskName:taskName, 
			isCompleted:false
		}

		setNewTasks(newTasks && [...newTasks, newTask])		
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
					{ tasks && tasks.map(task => <TaskItem key={task.id} {...task} />)}
				</ul>
				<div className="task-footer">
					<span className="task-count">0 items left</span>
					<ul className="task-filter">
						<TaskFilterOption />
					</ul>
					<button className="btn btn-delete-task">Clear Completed</button>
				</div>
			</div>
		</div>
	)
}
