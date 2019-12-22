import React from 'react'

export default function TaskFilterOption({ tasks }) {

	function handleFilterAll(e) {
		e.preventDefault()
		tasks.forEach(task =>
			console.log(task)
		)
	}

	function handleFilterActive(e) {
		e.preventDefault()
		const activeItems = tasks.filter(task => task.checked !== true)
		console.log(activeItems)
	}

	return (
		<>
			<li>
				<a
					href="/"
					onClick={(e) => handleFilterAll(e)}
				>
					All
				</a>
			</li>
			<li>
				<a
					href="/"
					onClick={(e) => handleFilterActive(e)}
				>
					Active
				</a>
			</li>
			<li>
				<a href="/">Completed</a>
			</li>
		</>
	)
}
