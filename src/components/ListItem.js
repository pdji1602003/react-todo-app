import React, { useContext } from 'react'
import { TodoContext } from '../App'

export default function ListItem(props) {
	const { id, listName } = props
	const { handleTodoSelect, handleTodoActivate } = useContext(TodoContext)


	return (
		<li
			className="list-item"
			onClick={(e) => handleTodoSelect(id)}
			data-active={handleTodoActivate(id)? 'true':''}
		>
			{listName}
		</li>
	)
}
