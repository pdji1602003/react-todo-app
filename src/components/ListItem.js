import React, { useContext } from 'react'
import { TodoContext } from '../App'

export default function ListItem(props) {
	const { id, listName } = props
	const { handleTodoSelect, handleTodoActivate } = useContext(TodoContext)


	return (
		<li
			className="list-item"
			// 按下link即調用function將按下link之id記錄在state裡
			onClick={(e) => handleTodoSelect(id)}
			// 檢查目前紀錄在state之id跟當前選中的是否相符，若是則予值"true"，以修改顏色
			data-active={handleTodoActivate(id)? 'true':''}
		>
			{listName}
		</li>
	)
}
