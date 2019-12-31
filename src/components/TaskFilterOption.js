import React, { useState, Fragment } from 'react'

export default function TaskFilterOption() {
	const [selectedLinkIndex, setSelectedLinkIndex] = useState()

	function handleClick(event, index) {
		event.preventDefault()
		setSelectedLinkIndex(links.findIndex(link => link.id === index))
	}

	return (
		<>
			{links.map((link, index) =>
				<Fragment key={index}>
					<li>
						<a
							href="/"
							onClick={(event) => handleClick(event, index)}
							data-state={selectedLinkIndex === index ? 'active' : ''}
						>
							{link.linkName}
						</a>
					</li>
				</Fragment>
			)}
		</>
	)
}

const links = [
	{
		id: 0,
		linkName: 'All'
	},
	{
		id: 1,
		linkName: 'Active'
	},
	{
		id: 2,
		linkName: 'Completed'
	}
]

export const All = 'All'
export const Active = 'Active'
export const Completed = 'Completed'

