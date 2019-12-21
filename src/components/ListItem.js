import React, { useContext } from 'react'
import { TodoContext } from '../App'

export default function ListItem(props) {
	const { id, listName } = props
	const { handleTodoSelect } = useContext(TodoContext)

	return (
		<li className="list-item" onClick={(e) => handleTodoSelect(id)}>{listName}</li>
	)
}
