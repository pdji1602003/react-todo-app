import React from 'react'

export default function TaskItem(props) {
	const {
		task,
		handleTaskChange,
		handleTaskDelete
	} = props

	function handleChange(changes) {
		handleTaskChange(task.id, { ...task, ...changes })
	}


	return (
		<li className="task-item">
			<input
				type="checkbox"
				id={task.id}
				checked={task.isCompleted}
				onChange={(e) => handleChange({ isCompleted: e.target.checked })}
			/>
			<label htmlFor={task.id}>
				<span className="task-check-box"></span>
				{task.taskName}
			</label>
			<button
				className="btn-delete-task-item"
				type="button"
				onClick={e => handleTaskDelete(task.id)}
			>
				&times;
			</button>
		</li>
	)
}
