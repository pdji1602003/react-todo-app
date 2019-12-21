import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TaskList from './components/TaskList'
import './css/app.css'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoWithReact.todos'

export const TodoContext = React.createContext()

export default function App() {
  const [todos, setTodos] = useState(sampleTodoData)
  const [listName, setListName] = useState("")
  const [selectedTodoId, setSelectedTodoId] = useState()
  const selectedTodoList = todos.find(todo => todo.id === selectedTodoId)||{}
  

  const TodoContextValue = {
    handleTodoSelect, 
    handleTodoChange
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos !== null) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleTodoInput(e) {
    const { value } = e.target
    setListName(value)
  }

  function handleTodoSubmit(e) {
    e.preventDefault()
    if (listName === null || listName === "") return
    const newTodo = {
      id: uuidv4(),
      listName: listName,
      tasks: [
        {
          id: uuidv4(),
          taskName: '',
          isCompleted: false
        }
      ]
    }
    // 將新增的newTodo與既有的todos合併
    setTodos([...todos, newTodo])
    // 調用setListName以將input輸入框內容清除
    setListName("")
  }

  function handleTodoSelect(id) {
    setSelectedTodoId(id)
  }

  function handleTodoDelete(selectedTodoId) {
    setTodos(todos.filter(todo => todo.id !== selectedTodoId))
  }

  function handleTodoChange(id, todo){
    const newTodos = [...todos]
    const index = newTodos.findIndex( t => t.id === id)
    newTodos[index] = todo
    setTodos(newTodos)
  }

  return (
    <>
      <main>
        <TodoContext.Provider value={TodoContextValue}>
          <TodoList
            todos={todos}
            listName={listName}
            handleTodoInput={handleTodoInput}
            handleTodoSubmit={handleTodoSubmit}
            handleTodoDelete={handleTodoDelete}
            selectedTodoId={selectedTodoId}
          />
          <TaskList
            todo={selectedTodoList}
          />
        </TodoContext.Provider>

      </main>
      <footer className="footer">
        <p>Made with <span role="img" aria-label="heart">❤</span> by Linyin</p>
      </footer>
    </>
  )
}

const sampleTodoData = [
  {
    id: 1,
    listName: 'learn react',
    tasks: [
      {
        id: 1,
        taskName: 'lift up state',
        isCompleted: false
      }
    ]
  }
]
