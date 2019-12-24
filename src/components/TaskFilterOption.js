import React from 'react'

export default function TaskFilterOption() {

	return (
		<>
			<li>
				<a href="/">All</a>
			</li>
			<li>
				<a href="/">Active</a>
			</li>
			<li>
				<a href="/">Completed</a>
			</li>
		</>
	)
}

export const All = 'All'
export const Active = 'Active'
export const Completed = 'Completed'

