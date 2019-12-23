import React from 'react'

export default function TaskFilterOption({ tasks }) {

	return (
		<>
			<li>
				<a
					href="/"
				>
					All
				</a>
			</li>
			<li>
				<a
					href="/"
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
