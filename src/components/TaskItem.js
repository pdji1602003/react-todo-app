import React from 'react'

export default function TaskItem(props) {
	const {
		id, 
		taskName, 
		isCompleted
	} = props

	return (
		<li className="task-item">
			<input 
				type="checkbox" 
				id={id} 
				checked={isCompleted}
				
			/>
			<label htmlFor={id}>
				<span className="task-check-box"></span>
				{taskName}
			</label>
			<button 
				className="btn-delete-task-item" 
				type="button"
			>
				&times;
			</button>
		</li>
	)
}
