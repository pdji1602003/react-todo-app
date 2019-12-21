import React, { useContext } from 'react'
import TaskItem from './TaskItem'
import TaskFilterOption from './TaskFilterOption'
import { TodoContext } from '../App'
import uuidv4 from 'uuid/v4'

export default function TaskList({ todo }) {
	const {

		listName,
		tasks
	} = todo
	console.log(tasks)

	const { handleTodoChange } = useContext(TodoContext)

	function handleTaskAdd() {
		const newTask = {
			id: uuidv4(),
			taskName: '',
			isCompleted: false
		}


	}

	return (
		<div className="task">
			<div className="task-header">
				<div className="task-title">{listName}</div>
			</div>
			<div className="task-body">
				<form className="task-form" action="/">
					<input
						type="text"
						placeholder="What needs to be done today?"

					/>
					<button type="submit" className="btn btn-submit">+</button>
				</form>
				<ul className="all-tasks">
					{tasks.map(task => <TaskItem key={task.id} {...task} />)}
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
