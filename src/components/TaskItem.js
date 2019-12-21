import React from 'react'

export default function TaskItem(props) {


	return (
		<li className="task-item">
			<input type="checkbox"/>
			<label>
				<span className="task-check-box"></span>
				
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
