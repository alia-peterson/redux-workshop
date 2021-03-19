const initialState = {
  todos: [],
  completed: []
}

export const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.todo, completed: false }
        ]
      }
    case 'TOGGLE_TODO':
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {...state, todos: updatedTodos}
    default:
      return state
  }
}
