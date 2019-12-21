import React from 'react'
import ListItem from './ListItem'


export default function TodoList(props) {
	
	const {
		todos,  
		listName,
		handleTodoInput,
		handleTodoSubmit,
		handleTodoDelete, 
		selectedTodoId
	} = props
	
	return (
		<div className="list">
			<div className="list-header">
				<h2 className="list-title">My Lists</h2>
			</div>
			<div className="list-body">
				<form className="list-form" onSubmit={e => handleTodoSubmit(e) }>
					<input 
						type="text" 
						placeholder="Create a new list here..." 
						onChange={ e => handleTodoInput(e)}
						value={listName}
					/>
					<button 
						type="submit" 
						className="btn btn-submit"
						onSubmit={e => handleTodoSubmit(e) }
					>
						+
					</button>
				</form>
				<ul className="list-all">
					{todos.map(todo => <ListItem key={todo.id} {...todo} />)}
				</ul>
				<div className="list-btn-container">
					<button 
						className="btn btn-delete-list"
						onClick={(e) => handleTodoDelete(selectedTodoId)}
					>
						Delete List
					</button>
				</div>
			</div>
		</div>
	)
}
